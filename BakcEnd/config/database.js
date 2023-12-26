const { Sequelize } = require("sequelize");
const config = require("./config"); // Import your configuration
const { username, password, database, host, dialect } = config.development;

const sequelize = new Sequelize(database, username, password, {
  dialect: dialect,
  host: host,
  port: 5432,
  logging: console.log, // Log queries to the console
});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection to database has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();

module.exports = sequelize;
