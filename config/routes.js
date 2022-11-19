const express = require('express');
const router = express.Router();
const controller = require('../controllers/base.controller');

router.post('/search', controller.getCats);
router.post('/cat-img/:id', controller.getImg);

module.exports = router;