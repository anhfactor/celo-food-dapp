import {BrowserRouter as Router} from "react-router-dom";
import {MainContent, Footer} from './components';
import GlobalStyles from './Globalstyles';
import React, { useState, useEffect } from 'react';

import Web3 from 'web3'
import { newKitFromWeb3 } from '@celo/contractkit';
import BigNumber from "bignumber.js";
import FoodOrderAbi from "./contract/FoodOrder.abi.json"
import erc20 from './contract/erc20.abi.json';

import {Works, Orders, Meals, Add, HistoryOrder} from './components';

const ERC20_DECIMALS = 18;

const contractAddress = "0x86702e5343EFb9F4c1e24172F832dEc598A099ef";
const cUSDContractAddress = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1"

function App() {

  const [celoBalance, setCeloBalance] = useState(0);
  const [contract, setcontract] = useState(null);
  const [address, setAddress] = useState(null);
  const [foods, setFood] = useState([]);
  const [kit, setKit] = useState(null);
  const [cUSDBalance, setcUSDBalance] = useState(0);

  const connectCeloWallet = async () => {
    if (window.celo) {
      try {
        await window.celo.enable();
        const web3 = new Web3(window.celo);
        let kit = newKitFromWeb3(web3);

        const accounts = await kit.web3.eth.getAccounts();
        const user_address = accounts[0];

        kit.defaultAccount = user_address;

        await setAddress(user_address);
        console.log(user_address);

        await setKit(kit);
        console.log(kit)
      } catch (error) {
        console.log('There is an error')
        console.log({ error });
      }
    } else {
      console.log("please install the extension");
    }
  };


  useEffect(() => {
    connectCeloWallet();
  }, []);

  useEffect(() => {
    if (kit && address) {
      return getBalance();
    } else {
      console.log("no kit or address");
    }
  }, [kit, address]);

  useEffect(() => {
    if (contract) {
      getFoods()
    };
  }, [contract]);

  const getBalance = async () => {
    
    const balance = await kit.getTotalBalance(address);
    const celoBalance = balance.CELO.shiftedBy(-ERC20_DECIMALS).toFixed(2);
    const USDBalance = balance.cUSD.shiftedBy(-ERC20_DECIMALS).toFixed(2);

    const contract = new kit.web3.eth.Contract(FoodOrderAbi, contractAddress);

    setcontract(contract);
    setCeloBalance(celoBalance);
    setcUSDBalance(USDBalance);
  };

  const getFoods = async function() {
    let _foodsLength = await contract.methods.getFoodOrdersLength().call()
    let _foods = []
    for (let i = 0; i < _foodsLength; i++) {
      let _food = new Promise(async (resolve, reject) => {
        let p = await contract.methods.getFood(i).call()
        resolve({
          index: i,
          owner: p[0],
          name: p[1],
          image: p[2],
          description: p[3],
          location: p[4],
          category: p[5],
          price: new BigNumber(p[6]),
          sold: p[7],
          serving: p[8],
        })
      })
      _foods.push(_food)
    }
    const foods = await Promise.all(_foods)
    setFood(foods)
  }

  // function to add food
  const addToFood = async (_name, _image, _description, _location, _category, _serving, _price) => {
    try {
      const price = new BigNumber(_price)
        .shiftedBy(ERC20_DECIMALS).toString();

      await contract.methods
        .setFood(
          _name,
          _image,
          _description,
          _location,
          _category,
          price,
          _serving
        )
        .send({ from: address });
        getFoods();
    } catch (error) {
      console.log(error);
    }
  }

  // function to initiate transaction
  const orderFood = async (_price, _index) => {
    try {
      const cUSDContract = new kit.web3.eth.Contract(erc20, cUSDContractAddress);
      const cost = new BigNumber(_price).shiftedBy(ERC20_DECIMALS).toString();

      await cUSDContract.methods
        .approve(contractAddress, cost)
        .send({ from: address });

      await contract.methods.orderFood(_index).send({ from: address });

      getBalance();
      getFoods();
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Router>
      <GlobalStyles/>
      <MainContent cUSDBalance={cUSDBalance} celoBalance={celoBalance} address={address} connectCeloWallet={connectCeloWallet}/>
      <Works/>
      <Meals/>
      <Orders foods={foods} orderFood={orderFood}/>
      <Add addToFood={addToFood}/>
      <HistoryOrder foods={foods}/>
      <Footer cUSDBalance={cUSDBalance} celoBalance={celoBalance} address={address} connectCeloWallet={connectCeloWallet}/>
    </Router>
  );
}

export default App;
