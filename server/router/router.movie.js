const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// SELECT * FROM "genres"
//     JOIN "genres_movies" ON "genres_movies".genre_id = "genres".id
//     JOIN "movies" ON "movies".id = "genres_movies".movies_id

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "movies";';
    pool.query(queryText)
      .then((result) => { res.send(result.rows) })
      .catch((err) => {
        console.log('Error completing SELECT movie query', err);
        res.sendStatus(500);
      });
  });

  router.put('/edit/', (req, res) => {
    const queryText = 'SELECT * FROM "movies";';
    pool.query(queryText)
      .then((result) => { res.send(result.rows) })
      .catch((err) => {
        console.log('Error completing SELECT movie query', err);
        res.sendStatus(500);
      });
  });


  module.exports = router;
