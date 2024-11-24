const express=require('express');
const cors=require('cors');
const path=require('path')
const dotenv=require('dotenv');
const  apiroutes = require('./routes/indexRouter');
dotenv.config();

const app= express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "CVFolder")));
app.use('/',apiroutes);

const PORT= process.env.PORT;
app.listen(PORT,()=>{
    console.log(`listining at ${PORT}`)
})
