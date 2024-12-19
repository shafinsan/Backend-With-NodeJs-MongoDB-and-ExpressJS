import express from 'express'

const app = express();

app.param('catagory', (req, res, next, catagory) => {
    console.log(`catagory :${catagory}`)
    next()
})
app.param('id', (req, res, next, id) => {
    console.log(`catagory :${id}`)
    next()
})
app.get('/product/:catagory/:id', (req, res) => {
    console.log(`ok`)
    res.send(`response receive`);
})

app.listen(8000, () => {
    console.log("Server Up")
})