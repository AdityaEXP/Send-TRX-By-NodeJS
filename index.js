const TronWeb = require('tronweb')

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://api.trongrid.io');
const solidityNode = new HttpProvider('https://api.trongrid.io');
const eventServer = 'https://api.trongrid.io';

const privateKey = '5d432e60524f656cb9dcd29c7a4fba3a3ed87389648c33463c89427508303897';
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
