// const { application } = require('express');
const express = require("express");
const app = express();
const router = require("./Todo/Todo-router");
const bodyParser = require("body-parser");
const cors=require('cors')
app.use(cors());
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", router);

const dotenv = require("dotenv");
dotenv.config();

module.exports = app;

//console.log(process.env.DATABASE_CONNECTION_STRING)
// const morgan=require('morgan');
// const notes=require('./data/notes-data')

// const read=(req,res,next)=>{
//     const noteId=Number(req.params.noteId);
//     const foundNote=notes.find((note)=>note.id===noteId);
//     res.json({data:foundNote});
// }

// router.route('/:noteId').get(read);

// const nameValidator=(req,res,next)=>{
//     const name=req.params.name;
//     if(name.length>10){
//         next(`${name} is invalid`);
//     }
//     else{ this.addListener
//         res.send(`${name} is a valid one`);
//     }
// };

// application.get('/name/:name',nameValidator);

// const errorHandler=(err,req,res,next)=>{
//     console.error(err);
//     res.send(err);
// };
// app.use(errorHandler)
// const routNotExist = (req,res,next)=>{
//     res.send(`${req.path} does not match`)
//     console.log("middleware made")
//     next()
// }

// app.use(logging)
// app.use(routNotExist)
// app.use(morgan('dev'))
