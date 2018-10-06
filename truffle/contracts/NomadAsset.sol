pragma solidity ^0.4.18;

import "./ERC721.sol";

contract NomadAsset is ERC721 {
    mapping(uint256 => uint256) public itemToWorld;

    address public owner;
    uint256 public itemId;

    function NomadAsset() public {
        owner = msg.sender;
    }

    function createItem(string _name, uint256 _worldId, address _to, uint _quantity) public {
        /* require(msg.sender == owner); */
        for(uint i = 0; i < _quantity; i++) {
            itemId += 1;
            itemToWorld[itemId] = _worldId;
            _mint(_to, itemId);
        }
    }

    function tradeItem(uint256 _itemId, address _to)
        public
        canOperate(_itemId)
    {
        _safeTransferFrom(msg.sender, _to, _itemId, "");
    }
}
