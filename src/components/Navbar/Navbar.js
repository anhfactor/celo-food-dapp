import React, {useState, useEffect} from 'react';
import { IconContext } from "react-icons";
import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../../Globalstyles';

import 
{
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MenuIcon,
    Menu,
    DropDownContent,
    SubA,
    DropDownLi,
    WalletIcon
} from './Navbar.styles';

const Navbar = props => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);

    const showButton = () =>{
        if(window.innerWidth<= 1000){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);
    return (
        <div>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon/>
                            Food Lover
                        </NavLogo>
                        <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>

                        <Menu onClick={handleClick} click={click}>
                        {props.address == undefined
                        ?
                        <Button primary bigFont onClick={props.connectCeloWallet}>Connect Wallet</Button>
                        :<DropDownLi>
                            <Button primary bigFont><WalletIcon/>0x...{props.address.substr(-12)}</Button>
                            <DropDownContent>
                                <SubA>USD Balance: ${props.cUSDBalance}CUSD</SubA>
                                <SubA>Celo Balance: ${props.celoBalance}</SubA>

                            </DropDownContent>
                        </DropDownLi>
                        }
                        </Menu>

                    </NavbarContainer>

                </Nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar;
