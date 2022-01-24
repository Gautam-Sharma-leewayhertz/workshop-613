const Web3 = require("web3");
const event = require("./build/contracts/Event.json");

const init = async () => {
  const web3 = new Web3(
    new Web3.providers.WebsocketProvider("ws://localhost:7545")
  );

  const id = await web3.eth.net.getId();
  const address = await web3.eth.getAccounts();

  const depolyednetwork = event.networks[id];

  const contracts = new web3.eth.Contract(event.abi, depolyednetwork.address);


  
  //first method to read event:-
  const receipt = await contracts.methods.emitEvent("hey").send({
    from: address[0],
  });
  await contracts.methods.emitEvent("hey hey").send({
    from: address[0],
  });
  //console.log(receipt.events);

  //second way-second object is a filter that when we not defined any object in this that means its fetched the latest block.
  //not convient
//   const results = await contracts.getPastEvents("myevent", 
//   { fromBlock: 0,
// filter:{
//     value:'hey',
// } });
//console.log(results);

//3rd way-read the events

 await contracts.events.myevent({})
 .on('data',event=>console.log(event));
 
 
 
await new Promise(resolve => 
    setTimeout(()=>resolve(),2000));
};

init();
