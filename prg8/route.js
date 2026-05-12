const express = require('express');
const { stat } = require('node:fs');
const app = express();

app.get('/user',(req,res)=>{
    res.json({role:'user',name:'John Doe',status:'active'});
});

app.get('/admin',(req,res)=>{
    res.json({role:'admin',name:'Super User',privileges:["read","write","delete"]});
});

app.listen(3000,()=>console.log('Server running on port 3000'))