pragma solidity ^0.8.0;


contract Transaction {
    event Transfer (address sender, address reciever, uint amount, string message, uint256 timestamp, string keyword);

    function publishTransaction(address payable reciever, uint amount, string memory message, string memory keyword) public {
        emit Transfer(msg.sender, reciever, amount, message, block.timestamp, keyword);
    }
}
