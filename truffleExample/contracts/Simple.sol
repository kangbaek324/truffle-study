// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract Simple {
    function return5() public pure returns(uint) {
        return 5;
    }

    function returnParameter(uint _num) public pure returns(uint) {
        return _num;
    }
}