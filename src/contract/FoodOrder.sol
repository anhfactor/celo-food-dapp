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
    address internal cUsdTokenAddress = 0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;

    struct Food {
        address payable owner;
        string name;
        string image;
        string description;
        string location;
        string category;
        uint price;
        uint sold;
        uint serving;
    }

    mapping (uint => Food) internal foods;

    function setFood(
        string memory _name,
        string memory _image,
        string memory _description, 
        string memory _location,
        string memory _category,
        uint _price,
        uint _sold,
        uint _serving
    ) public {
        uint _sold = 0;
        foods[foodsLength] = Food(
            payable(msg.sender),
            _name,
            _image,
            _description,
            _location,
            _category,
            _price,
            _sold,
            _serving
        );
        foodsLength++;
    }

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
            food.sold,
            food.serving
        );
    }

    function orderFood(uint _index) public payable  {
        require(
          IERC20Token(cUsdTokenAddress).transferFrom(
            msg.sender,
            foods[_index].owner,
            foods[_index].price
          ),
          "Transfer failed."
        );
        foods[_index].sold++;
    }
    
    function getFoodOrdersLength() public view returns (uint) {
        return (foodsLength);
    }
}
