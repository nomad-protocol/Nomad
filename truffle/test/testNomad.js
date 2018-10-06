const Nomad = artifacts.require('Nomad');

contract('Nomad', (accounts) => {
  let contract;

  beforeEach(async () => {
    contract = await Nomad.new();
  });

  describe('adding a world', () => {
    beforeEach(async () => {
      await contract.createWorld("BQ");
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
        //
      });
    });
  });
});
