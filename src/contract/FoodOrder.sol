// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

interface IERC20Token {
  function transfer(address, uint256) external returns (bool);
  function approve(address, uint256) external returns (bool);
  function transferFrom(address, address, uint256) external returns (bool);
  function totalSupply() external view returns (uint256);
  function balanceOf(address) external view returns (uint256);
  function allowance(address, address) external view returns (uint256);

  event Transfer(address indexed from, address indexed to, uint256 value);
  event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract FoodOrder {

    uint internal foodsLength = 0;
    
    //  address of the cusd token
    address internal cUsdTokenAddress = 0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;
    
    // admin address
    address ownerAddress;

// struct containing food data
    struct Food {
        address payable owner;
        string name;
        string image;
        string description;
        string location;
        string category;
        uint price;
        uint sales;
        uint serving;
    }

// map food struck to an integer
    mapping (uint => Food) internal foods;
    
    // event to e triggered when food is ordered
    event FoodOrdered (
        address _from,
        uint foodId
    );
    
    // admin modifier
    modifier isAdmin(){
        require(msg.sender == ownerAddress, "You are not an admin");
        _;
    }
    
    
    // constructor
    constructor(){
        ownerAddress = msg.sender;
    }
    
    


// save a particular food to the blockchain
    function setFood(
        string memory _name,
        string memory _image,
        string memory _description, 
        string memory _location,
        string memory _category,
        uint _price,
        uint _serving
    ) public {
     
        require(_price > 0, "Please enter a valid price");
        
        foods[foodsLength] = Food(
            payable(msg.sender),
            _name,
            _image,
            _description,
            _location,
            _category,
            _price,
            0,
            _serving
        );
        foodsLength++;
    }

// get a particular food
    function getFood(uint _index) public view returns (
        address payable,
        string memory, 
        string memory, 
        string memory, 
        string memory,
        string memory,
        uint, 
        uint,
        uint
    ) {
        Food storage food = foods[_index];
        return (
            food.owner,
            food.name, 
            food.image, 
            food.description, 
            food.location, 
            food.category,
            food.price,
            food.sales,
            food.serving
        );
    }
    
    // order a food

    function orderFood(uint _index) public payable  {
        require(
          IERC20Token(cUsdTokenAddress).transferFrom(
            msg.sender,
            foods[_index].owner,
            foods[_index].price
          ),
          "Transfer failed."
        );
        foods[_index].sales++;
        emit FoodOrdered(msg.sender, _index);
    }
    
    // get food lengtn
    function getFoodOrdersLength() public view returns (uint) {
        return (foodsLength);
    }
}
