require('dotenv').config();
const APIKey = process.env.API_KEY;
const PORT = 8000;
const baseApiUrl = 'https://api.themoviedb.org/3';

module.exports = {
  APIKey,
  PORT,
  baseApiUrl
};