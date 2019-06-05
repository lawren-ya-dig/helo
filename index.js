const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.json());


massive(process.env.CONNECTION_STRING)
    .then((dbInstance) => {
        app.set('db', dbInstance)
        console.log('The DB is working')
    })




const port = process.env.port || 3001
app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})

