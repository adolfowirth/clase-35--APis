const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');

router.get('/movies', moviesController.list);
router.post("/movies/add", moviesController.addMovie);
router.get('/movies/detail/:id', moviesController.detail);

router.put('/movies/update/:id', moviesController.update);
router.delete('/movies/delete/:id', moviesController.destroy);

module.exports = router;