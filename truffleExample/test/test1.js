/**
 * truffle 테스트 코드
 * Mocha와 chai를 사용함
 *
 * Mocha는 테스트르 위한 프레임워크
 * Chai는 테스트하려는 값이 맞는지 판단해주는 도구
 * 
 * truffle에서의 chai기능
 * should
 * expect
 * assert
 */

const Simple = artifacts.require("Simple");

// contract 쓰는이유는 계속 깨끗한 네트워크에 배포하기 위해서
// only와 skip은 mocha 프레임워크에서 나옴
  contract("test1", (account) => { 
// contract.only("test1", (account) => { // 이 테스트만 테스트함
// contract.skip("test1", (account) => { // 이 테스트를 통과함 
  it("should not have zero address", async () => {
  // it.only("should not have zero address", async () => { // 이 테스트에서 이 부분만 테스트함
  // it.skip("should not have zero address", async () => { // 이 테스트는 통과함
    const simpleInstance = await Simple.deployed(); // 배포된 simple instance를 변수에 저장
    await assert.notEqual(simpleInstance.address, 0x0); // 인스턴스의 주소가 0이 아니여야지 테스트에 통과하게 검사
  });

  it("should have 5", async () => {
    const simpleInstance = await Simple.deployed(); 
    const result = await simpleInstance.return5();
    await assert.equal(result, 5); 
  });

  it("should have 55", async () => {
    const simpleInstance = await Simple.deployed(); 
    const result = await simpleInstance.returnParameter(55);
    await assert.equal(result, 55); 
  });
});


