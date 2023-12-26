
module.exports = {
  development: {
    username: 'postgres', 
    password: '123456789',
    database: 'test',
    host: 'localhost',
    dialect: 'postgres', 
    baseURL: "http://localhost:4000",
  },
  production: {
    baseURL: "",
  },
};
