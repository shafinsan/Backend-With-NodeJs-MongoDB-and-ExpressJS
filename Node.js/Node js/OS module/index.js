import * as os from 'os';
console.log('memory :',os.totalmem());
console.log('free memory :',os.freemem());
console.log('architecture :',os.arch());
console.log("platform :",os.platform());
console.log("network :",os.networkInterfaces());
console.log("home :",os.homedir());
console.log("host name :",os.hostname());

