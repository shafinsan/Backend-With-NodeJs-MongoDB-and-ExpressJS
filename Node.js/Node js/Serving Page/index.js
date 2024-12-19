import * as path from 'path'
import http from 'http'
import { fileURLToPath } from 'url';
import * as fs from 'fs/promises'
let dir = path.dirname(fileURLToPath(import.meta.url))
let home = path.join(dir, 'Home.html')
let about = path.join(dir, 'About.html')
let contact = path.join(dir, 'Contact.html')

const showPage = async (page, res) => {
    try {
        let data = await fs.readFile(page,'utf8');
        res.end(data);
    } catch (error) {
        res.end("not found");
    }
}

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(201, 'ok', { 'Content-Type': 'text/html' });
        showPage(home, res);
    }
    else if(req.url==='/About.html'){
        res.writeHead(202, 'ok', { 'Content-Type': 'text/html' });
        showPage(about, res);
    }
    else if(req.url==='/Contact.html'){
        res.writeHead(203, 'ok', { 'Content-Type': 'text/html' });
        showPage(contact, res);
    }
})
server.listen(8000, () => {
    console.log("server up");
})