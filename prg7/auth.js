const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send(`
        <form action="/login" method="POST">
        Email:<input type="email" name="email_id"><br>
        Password:<input type="password" name="password"><br>
        <button type="submit">Login</button>
        </form>
    `);
});

app.post('/login',(req,res)=>{
    const {email_id,password}=req.body;
    if(email_id==='admin@test.com' && password==='1234'){
        res.send('Authentication Successful');
    }else{
        res.send('Authentication Failed');
    }
});

app.listen(3000,()=>console.log('Server runnin on port 3000'))