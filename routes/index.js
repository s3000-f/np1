var express = require('express');
var router = express.Router();
let gis = require('../controllers/gis');
/* GET home page. */
router.get('/', gis.testPoint);
router.get('/gis/testpoint', gis.testPoint)
router.put('/gis/addpolygon', gis.addPolygon)
module.exports = router;
