const Simple2 =  artifacts.require("Simple2");
const chai = require("chai");
const BN = web3.utils.BN; 
chai.use(require("chai-bn")(BN));
const { expect } = chai; 

contract("Test5", (accounts) => {
    it("should not have zero addresss", async() => {
        const simpleInstance = await Simple2.deployed();
        expect(simpleInstance.address).to.not.equal(0x0);
    });

    it("should have 1 ether", async () => {
        const simpleInstance = await Simple2.deployed();

        let info = await simpleInstance.return99();
        let info1 = await web3.eth.sendTransaction({ 
            from: accounts[0], 
            to:simpleInstance.address, 
            value: 1000000000000000000 
        });

        console.log(info1);
        console.log(info1.logs[0].topics);

        let balance = await web3.eth.getBalance(simpleInstance.address);
        expect(new BN(balance)).to.be.a.bignumber.equal(
            new BN("1000000000000000000")
        );
    })
})
