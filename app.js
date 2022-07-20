require("dotenv").config();
const express = require('express');
const cors = require('cors');
const dbconnection = require('./config/mongo');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('storage'));

const port = process.env.PORT || 3000;

// rutas
app.use('/api', require('./routes'));

// escuchar el puerto
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

dbconnection();