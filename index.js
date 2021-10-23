const TronWeb = require('tronweb')

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://api.trongrid.io');
const solidityNode = new HttpProvider('https://api.trongrid.io');
const eventServer = 'https://api.trongrid.io';

const privateKey = '';
const toAddress = 'TDbAngatQrpdjCfA6SBjedoLzJqGGAnhQ5';
const amountToSend = 1;

const tronWeb = new TronWeb(
    fullNode,
    solidityNode,
    eventServer
);

tronWeb.trx.sendTransaction(toAddress, amountToSend * 1000000, privateKey, function(err, result){
    if(err){
        console.log(err)
    }else{
        console.log(result)
    }
});
