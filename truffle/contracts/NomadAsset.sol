pragma solidity ^0.4.18;

import "./ERC721.sol";

contract NomadAsset is ERC721 {
    mapping(uint256 => uint256) public itemToWorld;

    address public owner;

    function NomadAsset() public {
        owner = msg.sender;
    }

    function createItem(string _name, uint256 _worldId, address _to, uint256 _itemId) public {
        /* require(msg.sender == owner); */
        itemToWorld[_itemId] = _worldId;
        _mint(_to, _itemId);
    }

    function tradeItem(uint256 _itemId, address _to)
        public
        canOperate(_itemId)
    {
        _safeTransferFrom(msg.sender, _to, _itemId, "");
    }
}
