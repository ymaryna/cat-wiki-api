const express = require('express');
const router = express.Router();
const controller = require('../controllers/base.controller');

router.post('/search', controller.getCats);
router.get('/cat-img/:id', controller.getImg);
router.get('/cat-imgs/:type', controller.getImgs);
router.get('/cat-favs', controller.getFavs);

module.exports = router;