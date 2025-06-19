const express = require("express");
const cors = require('cors');
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/db");
const dotenv = require("dotenv").config();
connectDb();
const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(errorHandler);


const port = process.env.PORT || 5000;

//Routes
app.use('/api/auth', require('./routes/auth'));

app.use('/api/annexures', require('./routes/annexures'));

app.use('/api/applications', require('./routes/applications'));


app.listen(port, (req, res) =>{
    console.log(`server on ${port}`);
});
