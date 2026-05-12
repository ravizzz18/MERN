1. a.   
Using MongoDB, create a collection called transactions in database 
usermanaged (drop if it already exists) and bulk load the data from a json file, 
transactions. Json. 
b. Upsert the record from the new file called transactions_upsert. json in 
Mongodb. 
Execution Steps 1a: 
1. In the terminal run, mongod - -version and mongosh - -version 
2. Set the environment variables for the system to recognize the commands 
3. Now run, mongosh command and enter 
test> use usermanaged 
usermanaged>db.createCollection(“transaction”) and exit 
4. After creating Database and Collection from the terminal window, create a JSON file 
called transaction.json by clicking on File->New File in the current directory. 
5. After the creation of transaction.json document file, import the document into the 
terminal window. 
6. Now change the path from current directory to the mongodb database tool folder to 
recognize the mongoimport command using cd command 
7. To import run, ./mongoimport - - db usermanaged - - collection transaction - - file 
“<path to transaction.json file>” - - jsonArray 
8. Goto new terminal window and run, mongosh command 
test>use usermanaged 
usermanaged>db.transaction.find().pretty() 
9. Now we can observe that the bulk data from json file is being displayed onto the 
terminal window. 
transaction.json 
[ 
{ 
"_id":1, 
"name":"Anil", 
"dept":"AIML", 
        "marks":80 
    }, 
    { 
        "_id":2, 
        "name":"Sagar", 
        "dept":"CSE", 
        "marks":90 
    } 
] 
 
Execution Steps 1b: 
1. Create a new JSON file called transactions_upsert.json by clicking on File->New File 
in the current directory. 
2. After the creation of transaction_upsert.json document file, import the document into 
the terminal window. 
3. In the terminal window, change the path from current directory to the mongodb 
database tool folder to recognize the mongoimport command using cd command.    
4. Now run, ./mongoimport --db usermanaged --collection transaction --file "< path to 
transactions_upsert. json file >" --jsonArray --mode upsert 
5. Goto new terminal window and run, mongosh command and enter 
test>use usermanaged 
usermanaged>db.transaction.find().pretty() 
6. Now we can observe that the new record from the transaction_upsert.json file is being 
displayed onto the terminal window. 
 
 
Note: Write down the output of the program 1a and 1b in the record on the left side. 
 
 
 
 
 
2. Query MongoDB with Conditions: [Create appropriate collection with necessary 
documents to answer the query]  
a. Find any record where Name is Somu  
b. Find any record where total payment amount (Payment. Total) is 600.  
c. Find any record where price (Transaction. Price) is between 300 to 500.  
Calculate the total transaction amount by adding up Payment. Total in all records. 
Program: 
// 1. Setup sample data  
db.sales.insertMany([  
{ Name: "Somu", Payment: { Total: 600 }, Transaction: { Price: 400 } },  
{ Name: "Alice", Payment: { Total: 800 }, Transaction: { Price: 350 } },  
{ Name: "Bob", Payment: { Total: 200 }, Transaction: { Price: 200 } }  
]);  
// 2. Find any record where Name is Somu  
db.sales.find({ Name: "Somu" });  
// 3. Find any record where total payment amount is 600  
db.sales.find({ "Payment.Total": 600 });  
// 4. Find any record where price is betwee3a. Write a program to check request header for cookies. 
Program:  
const http = require('http'); 
http.createServer((req, res) => { 
const cookies = req.headers.cookie; 
server.js 
res.writeHead(200, {'Content-Type': 'text/plain'}); 
res.end(`Cookies from request: ${cookies || 'No cookies found'}`); 
}).listen(3000, () => console.log('Server running on port 3000')); 
Execution Steps: 
1. In Terminal Type, mkdir <dir_name> 
2. cd <dir_name> 
3. npm init -y 
4. create server.js file in VSCode and type the above code. 
5. In terminal type, node server.js->Enter 
6. goto Google Chrome and type in the URL-> localhost:3000->Enter. 
7. To get the cookie information, Goto chrome settings->more tools->developer tools 
8. Then, console-> type, document.cookie=”pavan”->enter. 
9. Refresh the chrome and see the user cookie information. 
b. Write node.js program to print the car object properties, delete the second property 
and get length of the object. 
Program: 
carObject.js 
let car = { make: "Toyota", model: "Corolla", year: 2022 }; 
console.log("Original Properties:", Object.keys(car)); 
delete car.model; 
console.log("After Deletion:", car); 
console.log("Length of object:", Object.keys(car).length); 
Execution Steps: 
1. create carObject.js file in VSCode and type the above code. 
2. In terminal type, cd <dir_name> 
#goto the current directory created earlier for 3a 
3. Then type, node carObject.js -> Enter 
4. Now we can see the output in the terminal. 
4 a. Read the data of a student containing usn, name, sem, year_of_admission from node 
js and store it in the mongodb.  
b. For a partial name given in node js, search all the names from mongodb student 
documents created in Question(a) 
Program: 
Student.js 
const  { MongoClient }  = require('mongodb'); 
const url = "mongodb://localhost:27017"; 
const client = new MongoClient(url); 
async function run() { 
try { 
await client.connect(); 
const db = client.db('college'); 
const students = db.collection('st'); 
// Part A: Store Student 
const studentData = { usn: "1BM20CS001", name: "Rahul Kumar", sem: 4, 
year_of_admission: 2020 }; 
const studentData1 = { usn: "1BM20CS002", name: "Rahim", sem: 4, 
year_of_admission: 2020 }; 
const studentData2 = { usn: "1BM20CS003", name: "Rakesh", sem: 4, 
year_of_admission: 2020 }; 
await students.insertOne(studentData); 
await students.insertOne(studentData1); 
await students.insertOne(studentData2); 
console.log("Student added."); 
// Part B: Search Partial Name (e.g., "Rah") 
const partialName = "Rah"; 
const results = await students.find({ name: { $regex: partialName, $options: "i" 
} }).toArray(); 
console.log("Search Results:", results); 
} finally { 
await client.close(); 
} 
} 
run().catch(console.dir); 
Execution Steps: 
1. create student.js file in VSCode and type the above code. 
2. In the terminal->E:\BMSIT DATA\Mern lab\Backend> node student.js 
3. Now we can see the output in the terminal. 
5. Implement all CRUD operations on a File System using Node JS. 
Program: 
const fs = require('fs'); 
const filename = 'data.txt'; 
// Create / Update 
Crud.js  
fs.writeFileSync(filename, 'Hello, this is the initial text.\n'); 
console.log("File Created."); 
// Read 
let content = fs.readFileSync(filename, 'utf8'); 
console.log("Read Data:", content); 
// Update (Append) 
fs.appendFileSync(filename, 'This is appended text.'); 
console.log("File Updated."); 
// Read Updated data 
let updata = fs.readFileSync(filename, 'utf8'); 
console.log("Updated Data:", updata); 
// Delete 
fs.unlinkSync(filename); 
console.log("File Deleted."); 
Execution Steps: 
1. create crud.js file in VSCode and type the above code. 
2. In the terminal->E:\BMSIT DATA\Mern lab\Backend> node crud.js 
3. Now we can see the output in the terminal. n 300 to 500  
db.sales.find({ "Transaction.Price": { $gte: 300, $lte: 500 } });  
// 5. Calculate the total transaction amount  
db.sales.aggregate([ { $group: { _id: null, TotalAmount: { $sum: "$Payment.Total" } } } ]); 
Execution Steps: 
1. In the terminal run, mongod - -version 
2. Then check for, mongosh --version 
3. Now run, mongosh 
test> use usermanaged 
usermanaged>db.createCollection(“sales”) 
4. Type the above given program queries inside the sales collection. 
5. Now observe the output for each of the queries. 
Note: Write down the output of the program in the record on the left side.

Experiment 6: Node.js & AJAX 
Objective: Develop the application which takes name and email data from 
HTML form index.html after submission and sends the data in the form of 
object from client side to Node.js server using Ajax. 
Solution: 
index.html: 
HTML 
 
<form id="myForm"> 
    Name: <input type="text" id="name"><br> 
    Email: <input type="text" id="email"><br> 
    <button type="button" onclick="sendData()">Submit</button> 
</form> 
 
<script> 
function sendData() { 
    const data = { 
        name: document.getElementById('name').value, 
        email: document.getElementById('email').value 
    }; 
    fetch('/submit', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(data) 
    }).then(res => res.text()).then(alert); 
} 
</script> 
 
server.js: 
 
JavaScript 
 
 
 
  
const express = require('express'); 
const app = express(); 
app.use(express.json()); 
app.use(express.static(__dirname));  
 
app.post('/submit', (req, res) => { 
    console.log("Received Data:", req.body); 
    res.send("Data received successfully via Ajax!"); 
}); 
 
app.listen(3000, () => console.log('Server running on 3000')); 
 
Experiment 7: Express Authentication Form 
Objective: Develop an authentication mechanism with email_id and 
password using HTML and Express JS (POST method). 
Solution (authServer.js): 
JavaScript 
 
const express = require('express'); 
const app = express(); 
 
app.use(express.urlencoded({ extended: true })); 
 
app.get('/', (req, res) => { 
    res.send(` 
        <form action="/login" method="POST"> 
            Email: <input type="email" name="email_id" required><br> 
            Password: <input type="password" name="password" required><br> 
            <button type="submit">Login</button> 
        </form> 
    `); 
}); 
 
app.post('/login', (req, res) => { 
 
  
    const { email_id, password } = req.body; 
    if (email_id === "admin@test.com" && password === "1234") { 
        res.send("Authentication Successful"); 
    } else { 
        res.send("Invalid Credentials"); 
    } 
}); 
 
app.listen(3000, () => console.log("Server running on port 3000")); 

8. Demonstrate Express JS routing mechanism by developing two routes: User and 
Admin route. User route returns some user details and Admin route returns some admin 
details. 
Program: 
const express = require('express'); 
const app = express(); 
// User Route 
app.get('/user', (req, res) => { 
route.js 
res.json({ role: "User", name: "John Doe", status: "Active" }); 
}); 
// Admin Route 
app.get('/admin', (req, res) => { 
res.json({ role: "Admin", name: "Super User", privileges: ["read", "write", "delete"] }); 
}); 
app.listen(3000, () => console.log('Routing server listening on port 3000')); 
Execution steps: 
1. Check the installation in terminal window by running, node -v and npm -v. 
2. Create a project folder using, mkdir <dir_name> and use cd command to change the 
path to the current directory. 
3. Initialize the project using, npm init -y. 
4. Install Express using, npm install express. 
5. Create a new file called route.js and type the above code. 
6. Run the server using, node route.js 
7. Now open browser and type in the url, http://localhost:3000/user and enter. 
8. Follow the same for the admin route by typing in the url, http://localhost:3000/admin. 
9. Observe the output for both the user and admin route being displayed on the browser. 
9. Develop a React code to build a simple search filter functionality to display a filtered 
list based on the search query entered by the user. 
Program: 
search-app.js 
import React, { useState } from 'react'; 
function App() { 
const [query, setQuery] = useState(''); 
const items = ["Apple", "Banana", "Orange", "Mango", "Grapes"]; 
const filteredItems = items.filter(item => 
item.toLowerCase().includes(query.toLowerCase()) 
); 
return ( 
<div> 
<h2>Search Filter</h2> 
<input 
type="text" 
placeholder="Search fruits..." 
value={query} 
onChange={(e) => setQuery(e.target.value)} 
/> 
<ul> 
{filteredItems.map((item, index) => <li key={index}>{item}</li>)} 
</ul> 
</div> 
); 
} 
export default App; 
Execution steps: 
1. Check the installation in terminal window by running, node -v and npm -v. 
2. Open frontend folder and Create react app by using, npx create-react-app search-app in 
the terminal window. 
3. Change the directory using cd command by typing, cd search-app. 
4. From the explorer window, goto search-app folder/src/app.js and type the above code 
in it. 
5. Now in the terminal window type, npm start. 
6. Observe the output in browser window by giving the user text input in the search filter. 

10. Develop a React code to collect data from rest API. 
Program: 
rest-app.js 
import React, { useState, useEffect } from 'react'; 
function App() { 
const [users, setUsers] = useState([]); 
useEffect(() => { 
fetch('https://jsonplaceholder.typicode.com/users') 
.then(response => response.json()) 
.then(data => setUsers(data)) 
.catch(error => console.error("Error fetching data:", error)); 
}, []); 
return ( 
<div> 
<h2>User List from API</h2> 
<ul> 
{users.map(user => ( 
<li key={user.id}>{user.name} - {user.email}</li> 
))} 
</ul> 
</div> 
); 
} 
export default App; 
Execution steps: 
1. Check the installation in terminal window by running, node -v and npm -v. 
2. Open frontend folder and Create react app by using, npx create-react-app rest-app in 
the terminal window. 
3. Change the directory using cd command by typing, cd rest-app. 
4. From the explorer window, goto rest-app folder/src/app.js and type the above code in 
it. 
5. Now in the terminal window type, npm start. 
6. Observe the output in the browser window with user name and email being displayed 
in a list form. 
