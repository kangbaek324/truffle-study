const Simple2 = artifacts.require("Simple2");
const chai = require("chai");
const BN = web3.utils.BN;

const chaiAsPromised = require("chai-as-promised");
const chaiBN = require("chai-bn");

chai.use(chaiAsPromised);
chai.use(chaiBN(BN));

const { expect } = chai;

contract("Test7", (accounts) => {
    it("should not have zero addresss", async() => {
        const simpleInstance = await Simple2.deployed();
        expect(simpleInstance.address).to.not.equal(0x0);
    });

    it("should have 1 ether", async () => {
        const simpleInstance = await Simple2.deployed();

        await simpleInstance.return99();

        await expect(
            web3.eth.sendTransaction({ 
                from: accounts[0], 
                to:simpleInstance.address, 
                value: 1000000000000000000 
            })
        ).to.be.fulfilled;

        await expect(
            web3.eth.getBalance(simpleInstance.address)
        ).to.eventually.equal(
            new BN("1000000000000000000")
        );
    })
})
