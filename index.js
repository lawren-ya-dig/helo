const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 90000 }
  }))


massive(process.env.CONNECTION_STRING)
    .then((dbInstance) => {
        app.set('db', dbInstance)
        console.log('The DB is working')
    })

const controller = require('./server/controller');

app.post('/api/login', controller.login);
app.post('/api/register', controller.register);



const port = process.env.port || 3001
app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})

