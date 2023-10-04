const express = require('express');
const { hero_page, business, science, sports, search } = require('../controller/route_controller');
const route = express.Router();


route.get('/hero', hero_page)
route.get('/business', business)
route.get('/science', science)
route.get('/sports', sports)
route.post('/search', search)


module.exports = route;