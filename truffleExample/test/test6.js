// chai-as-promised 사용하기
// ^^ 이거 사용하면 비동기 코드를 기존보다 깔끔하게 짤 수 있게됨
// https://www.npmjs.com/package/chai-as-promised

// eventually => 트랙잭션 성공 => 결과 값 같음=> // 값을 정확히 비교 하고 싶은 경우
// flfilled => 트랙잭션 성공 => 패스 // 성공만 하면 되는 경우
// rejected => 트랙잭션 실패 => 패스 // 보통 예외를 작성할때 사용 (이미 오류가 날것을 알고 있는 경우)

const Simple2 = artifacts.require("Simple2");
const chai = require("chai");
const BN = web3.utils.BN;

const chaiAsPromised = require("chai-as-promised");
const chaiBN = require("chai-bn");

chai.use(chaiAsPromised);
chai.use(chaiBN(BN));

const { expect } = chai;

contract("Test6", (accounts) => {
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

        // let balance = await web3.eth.getBalance(simpleInstance.address);
        // expect(new BN(balance)).to.be.a.bignumber.equal(
        //     new BN("1000000000000000000")
        // );

        await expect(
            web3.eth.getBalance(simpleInstance.address)
        ).to.eventually.equal(
            new BN("1000000000000000000")
        );
    })
})
