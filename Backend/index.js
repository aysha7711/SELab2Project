import Express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import User from './routes/userRoute.js'
import Product from './routes/productRoute.js';
 import cors from 'cors'
 import cart from './routes/cartRoute.js'
const app=Express()
// // app.use(Express.json());
// app.use(bodyParser.json({ limit: "200mb" }));
// app.use(bodyParser.urlencoded({ limit: "200mb",  extended: true, parameterLimit: 1000000 }));
app.use(Express.json({limit: '25mb'}));
app.use(Express.urlencoded({limit: '25mb', extended: true}));

app.use(cors());

app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
  });
  
dotenv.config();
mongoose.connect(process.env.MONGO_URI)
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
})
app.listen(3001,()=>{
    console.log("Server is running")
});


app.use('/user',User);
app.use('/product',Product);
app.use('/cart',cart)
// app.listen(3001,()=>{
//     console.log("Server is Running")
// })