pragma solidity ^0.4.18;
import "./NomadAsset.sol";

contract Nomad {
  NomadAsset NomadAssetContract;
  address public owner;
  uint256 public totalItems;

  mapping(uint256 => uint256) public itemInWorld;

  struct Item {
    string name;
    uint quantity;
  }

  struct World {
    mapping(uint => Item) items;
    address worldAddress;
    uint numItems;
    string name;
  }

  function Nomad(address _NomadAssetAddress) public {
    // take in the ERC721 address
    owner = msg.sender;
    NomadAssetContract = NomadAsset(_NomadAssetAddress);
  }

  World[] public worlds;

  function createWorld(string _name, address _worldAddress) public {
    worlds.push(World({name: _name, numItems: 0, worldAddress: _worldAddress}));
  }

  function vote(uint _worldIdx, string _name, uint _quantity) public {
    World storage world = worlds[_worldIdx];
    world.items[world.numItems] = Item(_name, _quantity); // <-- where we should plug in Cody's ERC721
    for(uint i = 1; i <= _quantity; i ++) {
        uint itemId = totalItems + 1;
        NomadAssetContract.createItem(_name, _worldIdx, world.worldAddress, itemId);
        itemInWorld[itemId] = _worldIdx;
        totalItems++;
    }
    world.numItems++;
  }

  function findItem(uint _worldIdx, uint _itemId) public view returns(string _name, uint _quantity) {
    Item storage item = worlds[_worldIdx].items[_itemId];
    _name = item.name;
    _quantity = item.quantity;
  }
}
