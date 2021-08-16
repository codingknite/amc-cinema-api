const axios = require('axios');
const router = require('express').Router();
const config = require('../utils/config');

router.get('/featured', async (req, res) => {
  try {
    const featuredData = await axios.get(`${config.baseApiUrl}/movie/popular?api_key=${config.APIKey}&language=en-US&page=1`);

    const featuredMovies = [];

    for (let x = 0; x < 3; x++) {
      const randomNumber = Math.floor(Math.random() * 19);
      const randomMovie = featuredData.data.results[randomNumber];
      featuredMovies.push(randomMovie);
    }

    return res.json({
      message: 'success',
      data: featuredMovies
    });
  } catch (error) {
    return res.json({
      message: 'failure',
      error
    });
  }

});

router.get('/now-playing', async (req, res) => {
  try {
    const comingSoonData = await axios.get(`${config.baseApiUrl}/movie/now_playing?api_key=${config.APIKey}&language=en-US&page=1`);

    const comingSoonMovies = comingSoonData.data.results.slice(0, 10);

    return res.json({
      message: 'success',
      data: comingSoonMovies
    });
  } catch (error) {
    return res.json({
      message: 'failure',
      error
    });
  }

});

router.get('/coming-soon', async (req, res) => {
  try {
    const comingSoonData = await axios.get(`${config.baseApiUrl}/movie/upcoming?api_key=${config.APIKey}&language=en-US&page=1`);

    const comingSoonMovies = comingSoonData.data.results.slice(3, 8);

    return res.json({
      message: 'success',
      data: comingSoonMovies
    });
  } catch (error) {
    return res.json({
      message: 'failure',
      error
    });
  }

});

module.exports = router;