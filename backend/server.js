const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;
/*
console.log(uri);
mongoose.connect(uri,{useNewUrlParser : true,useCreateIndex : true});
const connection = mongoose.connection;

connection.once('open',() =>{
    console.log("MongoDB Database connection Established sucessfully");
})
*/
//const { MongoClient, ServerApiVersion } = require('mongodb');
//const uri = "mongodb+srv://firdousalam:W1mp4FzhRWsbf0vy@cluster0.pvgwlgd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&ssl=true";
//const uri = "mongodb://firdousalam:W1mp4FzhRWsbf0vy@ac-03wxvs3-shard-00-00.pvgwlgd.mongodb.net:27017,ac-03wxvs3-shard-00-01.pvgwlgd.mongodb.net:27017,ac-03wxvs3-shard-00-02.pvgwlgd.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-130vgo-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("success");
}).catch((err) =>{
    console.log(err,"error");
})
/*
client.connect(err => {
    console.log(err,"error");
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});