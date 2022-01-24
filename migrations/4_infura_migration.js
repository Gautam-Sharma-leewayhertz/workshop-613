const Infura=artifacts.require("Infura");

module.exports=function(deployer){
    deployer.deploy(Infura);
  }