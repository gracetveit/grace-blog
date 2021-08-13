const sequelize = require('sequelize');
const db = new sequelize('postgres://localhost/blog');

export default db;
