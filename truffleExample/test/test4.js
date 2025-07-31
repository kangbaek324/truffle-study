const Simple2 =  artifacts.require("Simple2");
const chai = require("chai");
const BN = web3.utils.BN; 
chai.use(require("chai-bn")(BN));
const { expect } = chai; 

contract("Test4", (accounts) => {
    it("should not have zero addresss", async() => {
        const simpleInstance = await Simple2.deployed();
        expect(simpleInstance.address).to.not.equal(0x0);
    });

    it("should have 1 ether", async () => {
        const simpleInstance = await Simple2.deployed();

        await web3.eth.sendTransaction({ 
            from: accounts[0], 
            to:simpleInstance.address, 
            value: 1000000000000000000 
        });

                await web3.eth.sendTransaction({ 
            from: accounts[1], 
            to:simpleInstance.address, 
            value: 2000000000000000000 
        });

                await web3.eth.sendTransaction({ 
            from: accounts[2], 
            to:simpleInstance.address, 
            value: 3000000000000000000 
        });

                await web3.eth.sendTransaction({ 
            from: accounts[3], 
            to:simpleInstance.address, 
            value: 4000000000000000000 
        });


        await simpleInstance.return99();

        // 스마트컨트랙트의 이벤트 가져오기
        // let info = await simpleInstance.getPastEvents("이벤트명", { << allEvents 할시 모든 이벤트 다 가져옴 
        let info = await simpleInstance.getPastEvents("Receive", {
            filter: {from: accounts[2]},
            fromBlock: 0, // 맨 처음 부터
            toBlock: "latest", // 맨끝까지
        })

        console.log(accounts)
        console.log(info);

        let balance = await web3.eth.getBalance(simpleInstance.address);
        expect(new BN(balance)).to.be.a.bignumber.equal(new BN("1000000000000000000"));
    })
})
