const NomadAsset = artifacts.require('NomadAsset');

contract('NomadAsset', (accounts) => {
    const owner = accounts[0];
    const beneficiary = accounts[1];
    const trader = accounts[3];
    const sword = 'sword';
    const dagger = 'dagger';
    describe('Creating an Item', () => {
        let contract;
        let id;
        beforeEach(async () => {
            contract = await NomadAsset.new({from: owner})
            id = await contract.itemId.call();
        })

        it('should create an item and send to an address', async() => {
            await contract.createItem(sword, 1, beneficiary, 10, {from: owner})
            await contract.createItem(dagger, 1, beneficiary, 10, {from: owner})
            const balance = await contract.balanceOf(beneficiary);

            assert.equal(balance.toNumber(), 20);
        })

        it('should map the item to the world', async() => {
            const world = 1;
            await contract.createItem(sword, world, beneficiary, 10, {from: owner})
            id = await contract.itemId.call();
            worldMapping = await contract.itemToWorld.call(id);

            assert.equal(worldMapping, world);
        })

        // it('should only allow the owner of the contract to create items', async() => {
        //     await expectThrow(
        //         contract.createItem(sword, 1, owner, 10, {from: beneficiary})
        //     )
        // })

    })

    describe('Trading an Item', async () => {
        let contract;
        let id;
        beforeEach(async () => {
            contract = await NomadAsset.new({from: owner})
            await contract.createItem(sword, 1, beneficiary, 10, {from: owner})
            id = await contract.itemId.call();
        })

        it('should only allow the owner of the NFT to trade', async () => {
            await expectThrow(
                contract.tradeItem(id, trader, {from: owner})
            )
        })

        it('should transfer an NFT to a new owner', async () => {
            await contract.tradeItem(id, trader, {from: beneficiary})
            await contract.createItem(dagger, 5, beneficiary, 10, {from: owner})
            id = await contract.itemId.call();
            await contract.tradeItem(id, trader, {from: beneficiary})
            const balance = await contract.balanceOf(trader);
            assert.equal(balance.toNumber(), 2)
        })
    })
})

async function expectThrow(promise) {
    const errMsg = 'Expected throw not received';
    try {
        await promise;
    } catch (err) {
        assert(err.toString().includes('revert'), errMsg);
        return;
    }

    assert(false, errMsg);
}
