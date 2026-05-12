const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static(__dirname));

app.post('/Submit',(req,res) =>{
    console.log('Recieved Data : ',req.body);
    res.send('Recieved data succesfully via Ajax!');
});

app.listen(3000,()=>console.log('Server Running on port 3000'))