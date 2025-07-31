// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract Simple2 {
    event Receive(address indexed from, uint amount);
    event ReturnNumber(string description);

    receive() external payable {
        emit Receive(msg.sender, msg.value);
    }

    function return99() public {
        emit ReturnNumber("This is return99");
    }
}