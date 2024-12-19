import express from 'express'

const app = express();

app.get('/product/:catagory/:id',(req,res)=>{
    const {catagory,id}=req.params;
    console.log(`catagory :${catagory} id:${id}`)
    res.send(`Received request for category: ${catagory}, id: ${id}`);
})

app.listen(8000, () => {
    console.log("Server Up")
})