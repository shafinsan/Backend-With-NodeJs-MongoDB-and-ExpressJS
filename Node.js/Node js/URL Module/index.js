import {URL} from 'url'
let myURL=new URL("https://example.com:8080/p/a/t/h?query=string#hash");
console.log('hash :',myURL.hash);
console.log('host :',myURL.host);
console.log('host name :',myURL.hostname);
console.log('href :',myURL.href);
console.log('port :',myURL.port);
console.log('serach :',myURL.search);
console.log('user name :',myURL.username);
console.log('path name :',myURL.pathname);
console.log('protocal :',myURL.protocol);
console.log('search params :',myURL.searchParams);