const Metamask=artifacts.require("MetaMask");

module.exports=function(deployer){
    deployer.deploy(Metamask);
  }