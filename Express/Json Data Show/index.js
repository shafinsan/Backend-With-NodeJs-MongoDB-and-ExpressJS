import express from 'express'
import data from './data.js';
const app = express();
app.get('/products', (req, res) => {
    res.json(data)
})
app.listen(8000, () => {
    console.log("Server Up")
})