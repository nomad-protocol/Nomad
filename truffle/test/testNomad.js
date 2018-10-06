const Nomad = artifacts.require('Nomad');
const NomadAsset = artifacts.require('NomadAsset');

contract('Nomad', (accounts) => {
  const owner = accounts[0];
  const world = accounts[1];
  let contract;
  let assetContract;

  beforeEach(async () => {
    assetContract = await NomadAsset.new({from: owner});
    contract = await Nomad.new(assetContract.address, {from: owner});
  });

  describe('adding a world', () => {
    beforeEach(async () => {
      await contract.createWorld("BQ", world);
    });

    describe('adding an item', () => {
      beforeEach(async () => {
        await contract.vote(0, "Red Sword", 10);
      });

      it('should return me that item', async () => {
        let item = await contract.findItem(0, 0);
        assert.equal(item[0], "Red Sword");
        assert.equal(item[1], 10);
      });

      it('should mint a new ERC721', async () => {
          const ownerAddress = await assetContract.ownerOf.call(1)
          const itemMapped = await assetContract.itemToWorld.call(1);

          assert.equal(ownerAddress, world);
          assert.equal(0, itemMapped.toNumber());
      });
    });
  });
});
