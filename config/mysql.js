const { Sequelize } = require("sequelize");

const database = process.env.MYSQL_DATA_BASE;
const username = process.env.MYSQL_USER_NAME;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(database, username, password, {
  hosy: host,
  dialect: "mysql",
});

const dbConnectMySQL = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = { dbConnectMySQL, sequelize };
