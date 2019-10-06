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

  router.put('/', (req, res) => {
    const updatedMovie = req.body;
    const queryText = `UPDATE "movies"
      SET "title" = $1,
      "description" = $2
      WHERE "id" = $3;`;

    const queryValues = [
      updatedMovie.title,
      updatedMovie.description,
      updatedMovie.id
    ]
    pool.query(queryText, queryValues )
      .then((result) => { res.send(result.rows) })
      .catch((err) => {
        console.log('Error completing SELECT movie query', err);
        res.sendStatus(500);
      });
  });


  module.exports = router;
