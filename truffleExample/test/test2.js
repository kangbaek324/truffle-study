// chai에서 제공하는 Expect를 이용해서 똑같이 테스트 해보기

// https://github.com/indutny/bn.js/

const Simple =  artifacts.require("Simple");
const chai = require("chai");
// const BN = require("bn.js");
const BN = web3.utils.BN; // ^^ 위에꺼 안쓰는 이유는 web3에서 bn을 재공해줌
chai.use(require("chai-bn")(BN));
const { expect } = chai; // chai에서 들고오기

contract("Test2", (account) => {
    it("should not have zero address", async () => {
        const simpleInstance = await Simple.deployed();
        await expect(simpleInstance.address).to.not.equal(0x0);
    })

    it("should have 5", async () => {
        const simpleInstance = await Simple.deployed();
        const result = await simpleInstance.return5();
        // await expect(result).to.equal(5);
        // console.log(new BN(5));
        await expect(result).to.be.bignumber.equal(new BN(5));
        // BN 연산하기

        const addNumber = new BN(4).add(new BN(1));
        await expect(result).to.be.bignumber.equal(addNumber);
    });

    it("should have 55", async () => {
        const simpleInstance = await Simple.deployed(); 
        const result = await simpleInstance.returnParameter(55);
        await expect(result).to.be.bignumber.equal(new BN(55));
    });
});

// 2에 53승 - 1이상은 불안정하게 계산됨
// 그래서 expected를 넣을떄느 bigNumber을 사용해야됨 << chai 에서 제공함 chai-bn