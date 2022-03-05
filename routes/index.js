// <!-- // COMP229 - Mid-Term Test
// // Laura Amangeldiyeva - 301167661
// // 2022-03-01 -->
var express = require('express');
var router = express.Router();
let controllerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controllerIndex.home);

module.exports = router;
