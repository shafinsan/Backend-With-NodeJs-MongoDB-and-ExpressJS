import express from 'express'
import connectDatabase from './Database/connectDatabase.js'
import { insertAllData,insertOneData,deleteManyData,deleteOneData,updateOneData,updateManyData,findData,findDataWithLogic,sortData } from './Model/model.js';
let port = process.env.PORT || 8000;
let URL = process.env.DATABASE_URL || "mongodb://localhost:27017/movies"
const app = express();
connectDatabase(URL);
insertOneData();
//insertAllData();
//findData();
//findDataWithLogic();
//sortData();
//updateOneData();
//updateManyData();
//deleteOneData();
//deleteManyData();
app.listen(port, () => {
    console.log(`${port} is connected...`)
})