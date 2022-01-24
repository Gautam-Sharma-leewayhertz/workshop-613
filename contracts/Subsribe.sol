// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Subscribe{
    event myevent(
        uint indexed id,
        uint indexed date,
        string indexed value
    );
    uint nextid;

    function emitEvent(string calldata value) external{
        emit myevent(nextid , block.timestamp ,value);
        nextid++;
    }

}