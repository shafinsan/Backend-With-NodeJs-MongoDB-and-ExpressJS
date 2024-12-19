import express from 'express'
const app = express();
app.get('/products', (req, res) => {
    const { catagory, id } = req.query;
    res.send(`catagory :${catagory} id :${id}`);
})
app.listen(8000, () => {
    console.log("Server Up")
})