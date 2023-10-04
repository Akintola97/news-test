const express = require('express');
const sports_route = express.Router();
require('dotenv').config();
const axios = require('axios');
const api_key = process.env.API_KEY;


sports_route.get('/', async(req, res)=>{
    try {
        const sports_data = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=21&apiKey=${api_key}`)
        res.send(sports_data.data)
    } catch (error) {
        console.log(error)
    }
   

})




module.exports = sports_route