require('dotenv').config()
const apiRouter = require('./routes/api')
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const port = process.env.port || 5000;

app.use(cors())
app.use(express.json())

// Access images publically  
app.use('/uploads', express.static('uploads'))

const username = process.env.USER
const password = process.env.PASSWORD



const uri = `mongodb+srv://${username}:${password}@sprintug.p6gwm2f.mongodb.net/?retryWrites=true&w=majority`

// connect to local database
// mongoose.connect("mongodb://127.0.0.1:27017/NewDB",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(() => {
//     console.log("connected to database")
// }).catch((err)=>{
//     console.log(err)
// })

// connect to cloud database
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connected to database")
}).catch((err)=>{
    console.log(err)
})

app.use('/api', apiRouter);

app.listen(port, error =>{
    if (error){
        return console.log(error);
    }
    console.log(`listening on port ${port}...`);
})