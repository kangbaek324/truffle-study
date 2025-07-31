// before, before-each 사용하기
// https://archive.trufflesuite.com/docs/truffle/how-to/debug-test/write-tests-in-javascript/

const Simple2 = artifacts.require("Simple2");
const chai = require("chai");
const BN = web3.utils.BN;

const chaiAsPromised = require("chai-as-promised");
const chaiBN = require("chai-bn");

/**
 * 
 * 
 */

chai.use(chaiAsPromised);
chai.use(chaiBN(BN));

const { expect } = chai;

contract.only("Test8", (accounts) => {
    let simpleInstance;
    // before(async () => {
        //     simpleInstance = await Simple2.deployed();
        // });
        
    beforeEach(async () => {
        // simpleInstance = await Simple2.deployed(); << 한번 배포한거 계속씀 왜냐면 migrations 폴더 안에 배포된 컨트랙트를 가져오기 때문에 계속 같은 컨트랙트를 대입하게 됨
        simpleInstance = await Simple2.new(12); // << 새롭게 배포함   
        // simpleInstance = await Simple2.new(12, 33); // << 매게 변수가 있는경우   
    });

    it("should not have zero addresss", async() => {
        // expect(simpleInstance.address).to.not.equal(0x0);
        // simpleInstance = await Simple2.de(); // << 새롭게 배포함   
        console.log(simpleInstance.address)
    });

    it("should not have zero addresss", async() => {
        // expect(simpleInstance.address).to.not.equal(0x0);
        // simpleInstance = await Simple2.de(); // << 새롭게 배포함   
        console.log(simpleInstance.address)
    });

    // it("should have 1 ether", async () => {
    //     await simpleInstance.return99();

    //     await expect(
    //         web3.eth.sendTransaction({ 
    //             from: accounts[0], 
    //             to:simpleInstance.address, 
    //             value: 1000000000000000000 
    //         })
    //     ).to.be.fulfilled;

    //     await expect(
    //         web3.eth.getBalance(simpleInstance.address)
    //     ).to.eventually.equal(
    //         new BN("1000000000000000000")
    //     );
    // });
})
