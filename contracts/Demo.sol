// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Demo{
    uint data;
    string public str;
    function getdata() external view returns(uint,string memory){
        return (data,str);
    }

    function setdata(uint _data) external{
        data=_data;
    }
    //send ether-payable-this smart comarct is capable of receive the  value.
    function sendether() external payable{
        str="send Ether";
    }

    
    function setDataPrivate(uint _data) private{
        data=_data+10;
    }
}