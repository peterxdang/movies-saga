const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.get('/:id', (req, res) => {
    const queryText = `SELECT * FROM "genres"
    JOIN "genres_movies" ON "genres_movies".genre_id = "genres".id
    JOIN "movies" ON "movies".id = "genres_movies".movies_id
    WHERE "movies".id = $1;`;
    console.log(req.params.id);
    pool.query(queryText, [req.params.id] )
      .then((result) => { res.send(result.rows) })
      .catch((err) => {
        console.log('Error completing SELECT movie query', err);
        res.sendStatus(500);
      });
  });


  module.exports = router;

//   