// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract Simple3 {
    event OnlyTrue(bool resultTrue);

    uint public num;
    uint deployedTime;
    constructor(uint _num) {
        num = _num;
        deployedTime = block.timestamp;
    }

    function noFalse(bool trueOrFalse) public {
        require(trueOrFalse, "No False !");
        emit OnlyTrue(trueOrFalse);
    }

    function return5() public pure returns(uint) {
        return 5;
    }

    function return5In10mins() public view returns(uint) {
        require(block.timestamp >= deployedTime + 10 minutes, "10 mins is not passed yet!"); // << 이거 테스트 할려면 test-helper같은걸로 가나슈 시간 변경 시켜서 테스트 해야됨
        return 5;
    }
}

// 솔리디티 전역변수 검색시 많은 정보 나옴