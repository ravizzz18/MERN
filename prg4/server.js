const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async fuunction run(){
    try{
        await client.connect();
        const db = client.db('College');
        const students =  client.collection('st');

        const st = {usn:"1by24ai123",name:"Ravindra"};
        
        await students.insertOne(st);
        
        console.log('Student Details Added');

        const partialName = "Ra";
        const results = await students.find({name: {$regex:partialName, $options="i"}}).toArray();

        console.log("reslts : ",results);
    }finally{
        await client.close();
    }
}
run().catch(console.dir)