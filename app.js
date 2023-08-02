// const express= require('express');
// const app = express(); 
// const mongoose  = require('mongoose');
// const mongodb = "mongodb+srv://ramboon422:Hey@123@apicluster.kf6nlj1.mongodb.net/NodejsEasy?retryWrites=true&w=majority";

 
// const noteRoute = require('./router/notes.routes');
// const userRouter = require('./router/user.router');
// app.use(express.json());
 
// app.use((req,res,next)=>{
//     console.log("HTTP method = "  + req.method +" , URL = " + req.url);
//     next();
// });   




// app.use("/v1/users/",userRouter)
// app.use("/v1/notes/",noteRoute)


// mongoose.connect(mongodb,{useNewUrlParser: true,useUnifiedTopology:true})
// .then(()=>{
//     console.log("Mongodb is connected");
// })
// .catch((err)=>{
//     console.log("Mongodb is not connected",err);
// });

// const port = 4500;

// app.listen (port,()=>{
//     console.log("Server is running on port 4500");
// })






const express = require('express');
const app = express();
const mongoose = require('mongoose');


const username = 'ramboon422';
const password = 'Hey@123';
const clusterUrl = 'apicluster.kf6nlj1.mongodb.net';
const databaseName = 'NodejsEasy';

const uri = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(
  password
)}@${clusterUrl}/${databaseName}?retryWrites=true&w=majority`;

const noteRoute = require('./router/notes.routes');
const userRouter = require('./router/user.router');
app.use(express.json());

app.use((req, res, next) => {
  console.log("HTTP method = " + req.method + " , URL = " + req.url);
  next();
});

app.use("/v1/users/", userRouter)
app.use("/v1/notes/", noteRoute)

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((err) => {
    console.log("Mongodb is not connected", err);
  });

const port = 4500;

app.listen(port, () => {
  console.log("Server is running on port 4500");
});
