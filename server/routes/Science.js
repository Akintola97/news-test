const express = require('express');
const science_route = express.Router();
const axios = require('axios');
require('dotenv').config();
const api_key = process.env.API_KEY;


science_route.get('/', async(req, res)=>{
    try {
        const science_data = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=21&apiKey=${api_key}`)
        res.send(science_data.data)
    } catch (error) {
        console.log(error)
    }


})




module.exports = science_route
