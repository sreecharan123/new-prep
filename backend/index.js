import express from "express";
import {PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js"; 
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
const app=express();

//middleware parsing for request body 
app.use(express.json());
//middleware for handling cors.
//option 1: allow all origins with default of cors.
app.use(cors());
//option2: allow custom origins
//app.use(cors({
     //   origin:'http://localhost:3000',
      //  methods:['GET','POST','PUT','DELETE'],
      //  allowedHeaders:['Content-Type'],
//}));

app.get('/',(request,response)=>{
        console.log(request);
        return response.status(234).send('welocme to mern stack')
});
app.use('/books',booksRoute);
//Hello world route




mongoose.connect(mongoDBURL)
.then(()=>{
        console.log('app connected to database')
        app.listen(PORT,()=>{
                console.log(`App is running in port:${PORT}`);
           });
       
})
.catch((error)=>{
        console.log(error);

});
     