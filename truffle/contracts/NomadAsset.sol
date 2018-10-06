pragma solidity ^0.4.18;

import "./ERC721.sol";

contract NomadAsset is ERC721 {
    mapping(uint256 => GameItem) public gameItems;

    address public owner;
    uint256 public itemId = 1;

    struct GameItem {
        string name;
        uint256 attackPower;
    }

    function NomadAsset() public {
        owner = msg.sender;
    }

    function createItem(string _name, uint256 _attackPower, address _to) public {
        require(msg.sender == owner);
        gameItems[itemId] = GameItem(_name, _attackPower);
        _mint(_to, itemId);
        itemId += 1;
    }

    function tradeItem(uint256 _itemId, address _to)
        public
        canOperate(_itemId)
    {
        _safeTransferFrom(msg.sender, _to, _itemId, "");
    }
}
