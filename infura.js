const Web3 = require("web3");
const Infura = require("./build/contracts/Infura.json");
const HdwalletPRovider=require('@truffle/hdwallet-provider');


const init = async () => {
    
    const web3 = new Web3(
    new Web3.providers.WebsocketProvider("ws://localhost:7545")
  );
  const privateKey='530906266bf0ce7e8cfe63ad51f18584a4df50097a3c8850a355cd251c8be048';
  const address='0xABAbe82B824657dD2c86592eFE4F3cce6332e05C';
  

  const provider=new HdwalletPRovider(
    privateKey,
    'http://localhost:7545'
)
  const id = await web3.eth.net.getId();
  //const address = await web3.eth.getAccounts();

  const depolyednetwork = Infura.networks[id];
  const  contracts = new web3.eth.Contract(Infura.abi, depolyednetwork.address);

  await contracts.methods.setdata(45).send({
      from:address
  })

  let  contract = new web3.eth.Contract(Infura.abi);

  contract=await contracts.deploy({data:contracts.bytecode})
  .send({from:address});

  const result= await contracts.methods.getdata().call();
  console.log(result);
}
 
init();