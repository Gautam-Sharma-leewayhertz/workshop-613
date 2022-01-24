// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MetaMask{
       uint data;
    function setdata(uint _data) external{
        data=_data;
    }
    function getdata() external view returns(uint){
        return data;
    }
     
}