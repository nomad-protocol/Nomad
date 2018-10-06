pragma solidity ^0.4.18;
import "./NomadAsset.sol";

contract Nomad {
  NomadAsset NomadAssetContract;

  struct Item {
    string name;
    uint quantity;
  }

  struct World {
    mapping(uint => Item) items;
    uint numItems;
    string name;
  }

  function Nomad(address _NomadAssetAddress) public {
    // take in the ERC721 address
    NomadAssetContract = NomadAsset(_NomadAssetAddress);
  }

  World[] public worlds;

  function createWorld(string _name) public {
    worlds.push(World({name: _name, numItems: 0}));
  }

  function vote(uint _idx, string _name, uint _quantity) public {
    World storage world = worlds[_idx];
    world.items[world.numItems] = Item(_name, _quantity); // <-- where we should plug in Cody's ERC721
    world.numItems++;
  }

  function findItem(uint _worldIdx, uint _itemId) public view returns(string _name, uint _quantity) {
    Item storage item = worlds[_worldIdx].items[_itemId];
    _name = item.name;
    _quantity = item.quantity;
  }
}
