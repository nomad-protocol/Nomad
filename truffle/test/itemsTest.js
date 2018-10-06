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
        })

        it('should create an item and send to an address', async() => {
            await contract.createItem(sword, 1, beneficiary, 1, {from: owner})
            await contract.createItem(dagger, 1, beneficiary, 2, {from: owner})
            const balance = await contract.balanceOf(beneficiary);

            assert.equal(balance.toNumber(), 2);
        })

        it('should map the item to the world', async() => {
            const world = 1;
            await contract.createItem(sword, world, beneficiary, 1, {from: owner})
            const worldMapping = await contract.itemToWorld.call(1);

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
            await contract.createItem(sword, 1, beneficiary, 1, {from: owner})
        })

        it('should only allow the owner of the NFT to trade', async () => {
            await expectThrow(
                contract.tradeItem(1, trader, {from: owner})
            )
        })

        it('should transfer an NFT to a new owner', async () => {
            await contract.tradeItem(1, trader, {from: beneficiary})
            await contract.createItem(dagger, 5, beneficiary, 2, {from: owner})
            await contract.tradeItem(2, trader, {from: beneficiary})
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
