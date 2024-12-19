import * as os from 'os'
import * as path from 'path'
import * as fs from 'fs/promises'
import http from 'http'
import { fileURLToPath } from 'url'
let dir = fileURLToPath(import.meta.url)
console.log("********************************path module**********************************")
let myDir=path.dirname(dir)
console.log('dir :', dir)
console.log('dirname :', path.dirname(dir))
console.log("basename :", path.basename(dir))
console.log("basename without extention :", path.basename(dir, ".js"))
console.log('extention :', path.extname(dir))
console.log('join :', path.join(dir, "shafin.os"))
console.log('is absolute :', path.isAbsolute)
let value = path.parse(dir);
console.log("Parse value:", value)
console.log("********************************end path module**********************************")
console.log("********************************os module**********************************")
console.log('totoal memeory :', os.totalmem());
console.log('free memory :', os.freemem());
console.log('architechture :', os.arch());
console.log('platform :', os.platform());
console.log('host name :', os.hostname());
console.log('network interface :', os.networkInterfaces());
console.log('version :', os.version());
console.log("********************************end os module**********************************")
console.log()


console.log("**********************file module promise********************************");

console.log('create shafin file');
try {
    let x = path.basename(myDir);
    let newFile = path.join(x, 'shafin');
    await fs.mkdir(newFile, { recursive: true });
    console.log('suceesfully file created')
} catch (error) {
    console.log("file can't created");
}
console.log('delete shafin file');
try {
    let x = path.basename(myDir);
    let newFile = path.join(x, 'shafin');
    await fs.rmdir(newFile);
    console.log('suceesfully delete file')
} catch (error) {
    console.log("file can't deleted");
}
try{   
    await fs.writeFile("newFile.txt", "hello elias jaber shafin")
    await fs.appendFile("newFile.txt", "i am the best teacher");
    await fs.copyFile("newFile.txt", "copyFile.txt");
    let data = await fs.readFile("newFile.txt", "utf-8");
    console.log(data);
    let info=await fs.stat("newFile.txt");
    console.log(info)
    console.log(info.isDirectory());
    console.log(info.isFile());
}catch(error){
    console.log(error)
}
console.log("**********************end file module promise********************************");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serving = http.createServer(async (req, res) => {
    if (req.url === '/') {
        const homePage = path.join(__dirname, 'home.html');
        try {
            const data = await fs.readFile(homePage, 'utf-8');
            res.writeHead(200, 'OK', { 'Content-Type': 'text/html' });
            res.end(data);
        } catch (err) {
            res.writeHead(500, 'Internal Server Error', { 'Content-Type': 'text/plain' });
            res.end('Error reading home.html');
        }
    } 
    else if(req.url==='/about'){
        const homePage = path.join(__dirname, 'about.html');
        try {
            const data = await fs.readFile(homePage, 'utf-8');
            res.writeHead(200, 'OK', { 'Content-Type': 'text/html' });
            res.end(data);
        } catch (err) {
            res.writeHead(500, 'Internal Server Error', { 'Content-Type': 'text/plain' });
            res.end('Error reading home.html');
        }
    }
    else if(req.url==='/contact'){
        const homePage = path.join(__dirname, 'contact.html');
        try {
            const data = await fs.readFile(homePage, 'utf-8');
            res.writeHead(200, 'OK', { 'Content-Type': 'text/html' });
            res.end(data);
        } catch (err) {
            res.writeHead(500, 'Internal Server Error', { 'Content-Type': 'text/plain' });
            res.end('Error reading home.html');
        }
    }
    else {
        res.writeHead(404, 'Not Found', { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});
serving.listen(8000,()=>console.log("Server Up"))
