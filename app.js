require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morganBody = require("morgan-body");
const loggerStream = require("./utils/handleLogger");

const dbConnectNoSQL = require("./config/mongo");
const {dbConnectMySQL} = require("./config/mysql");
const app = express();

const ENGINE_DB = process.env.ENGINE_DB;

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

// morganBody(app, {
//   noColors: true,
//   stream: loggerStream,
//   skip: function (req, res) {
//     return res.statusCode < 400;
//   },
// });

const port = process.env.PORT || 3000;

// rutas
app.use("/api", require("./routes"));

// escuchar el puerto
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

(ENGINE_DB === "nosql") ? dbConnectNoSQL() : dbConnectMySQL();

