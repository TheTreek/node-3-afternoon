require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const pcont = require('./Controllers/products_controller');

const app = express();
app.use(express.json());

//ENDPOINTS ----------------------------------------------

//Get All
app.get('/api/products',pcont.getAll);
//Get one
app.get('/api/products/:id',pcont.getOne);
//Update
app.put('/api/products/:id',pcont.update);
//Create
app.post('/api/products',pcont.create);
//Delete
app.delete('/api/products/:id',pcont.delete);


//START SERVER -------------------------------------------

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db =>{
    app.set('db',db);
    app.listen(SERVER_PORT, ()=>console.log('SERVER RUNNING ON PORT '+SERVER_PORT));
}).catch(err=>console.log(err));

