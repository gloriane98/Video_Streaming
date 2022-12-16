require("dotenv").config();

const PORT = process.env.PORT || 9000;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

const CLOUD_NAME = process.env.CLOUD_NAME;
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

module.exports = {
  PORT,
  DB_PASSWORD,
  DB_NAME,
  DB_USER,
  CLOUD_NAME,
  API_KEY,
  API_SECRET,
};
