const { application } = require('express');
const express=require('express')
const app=express()
const morgan=require('morgan');
const nameValidator=(req,res,next)=>{
    const name=req.params.name;
    if(name.length>10){
        next(`${name} is invalid`);
    }
    else{ this.addListener
        res.send(`${name} is a valid one`);
    }
};

application.get('/name/:name',nameValidator);

const errorHandler=(err,req,res,next)=>{
    console.error(err);
    res.send(res.send(err));
};
app.use(errorHandler)
const routNotExist = (req,res,next)=>{
    res.send(`${req.path} does not match`)
    console.log("middleware made")
    next()
}



// app.use(logging)
app.use(routNotExist)
app.use(morgan('dev'))

module.exports = app