require('dotenv').config;
const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the AMC Cinema API',
    routes: {
      featured: {
        url: '/api/featured',
        data: 'returns featured movies',
        dataLength: 3,
        exampleObject: {
          'adult': false,
          'backdrop_path': '/gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg',
          'genre_ids': [
            16,
            35,
            12,
            10751
          ],
          'id': 459151,
          'original_language': 'en',
          'original_title': 'The Boss Baby: Family Business',
          'overview': 'The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.',
          'popularity': 1795.62,
          'poster_path': '/5dExO5G2iaaTxYnLIFKLWofDzyI.jpg',
          'release_date': '2021-07-01',
          'title': 'The Boss Baby: Family Business',
          'video': false,
          'vote_average': 8,
          'vote_count': 288
        }
      },
      'now-playing': {
        url: '/api/now-playing',
        description: 'returns now playing movies',
        dataLength: 8,
        exampleObject: {
          'adult': false,
          'backdrop_path': '/gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg',
          'genre_ids': [
            16,
            35,
            12,
            10751
          ],
          'id': 459151,
          'original_language': 'en',
          'original_title': 'The Boss Baby: Family Business',
          'overview': 'The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.',
          'popularity': 1795.62,
          'poster_path': '/5dExO5G2iaaTxYnLIFKLWofDzyI.jpg',
          'release_date': '2021-07-01',
          'title': 'The Boss Baby: Family Business',
          'video': false,
          'vote_average': 8,
          'vote_count': 288
        }
      },
      'coming-soon': {
        url: '/api/coming-soon',
        description: 'returns coming soon movies',
        dataLength: 3,
        exampleObject: {
          'adult': false,
          'backdrop_path': '/gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg',
          'genre_ids': [
            16,
            35,
            12,
            10751
          ],
          'id': 459151,
          'original_language': 'en',
          'original_title': 'The Boss Baby: Family Business',
          'overview': 'The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.',
          'popularity': 1795.62,
          'poster_path': '/5dExO5G2iaaTxYnLIFKLWofDzyI.jpg',
          'release_date': '2021-07-01',
          'title': 'The Boss Baby: Family Business',
          'video': false,
          'vote_average': 8,
          'vote_count': 288
        },
      }
    }
  });
});

module.exports = app;
