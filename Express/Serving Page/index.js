import express from 'express'
import * as path from 'path'
const app = express();
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'Serving Page/public/Home.html'));
})
app.listen(8002, () => {
    console.log("Server Up")
})