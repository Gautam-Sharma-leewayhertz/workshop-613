const Web3=require('web3')
const demo=require('./build/contracts/demo.json')

const init=async()=>{
const web3=new Web3(new Web3.providers.WebsocketProvider('ws://localhost:7545'));

const id=await web3.eth.net.getId();
const deployedNetwork=demo.networks[id];

const contract =new web3.eth.Contract(
    demo.abi,
    deployedNetwork.address);


    const address=await web3.eth.getAccounts();

    //use a setdata function from the contracts

    const result= await contract.methods.setdata(45).send({
        from:address[0],
        //when you not defined the gas price and limit its automatically set.
    })
    //console.log(result);

   //use a get data function from the contract
  

   //send Ether-first method
   await contract.methods.sendether().send({
       from:address[0],
       value:'100000'
   })
   //send Ether-second Method(direct transcation)
//    const ss=await web3.eth.sendTransaction({
//        from:address[0] ,
//        to: contract.options.address,
//        value: 100,
//    })
//    console.log(ss);
   const data= await contract.methods.getdata().call()
   console.log(data);


   var subscribe= await web3.eth.subscribe('newBlockHeaders',function(error,blockHeader){
       if(errcor) console.log(error)
       console.log(blockHeader);

   }).on('data',function(blockHeader){
       console.log(blockHeader);
   })
   
 

}
init();