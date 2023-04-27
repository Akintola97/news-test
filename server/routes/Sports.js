const express = require('express');
const sports_route = express.Router();
const axios = require('axios');
require('dotenv').config();
const api_key = process.env.api_key


sports_route.get('/', async(req, res)=>{
    try {
        const sports_data = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&catergory=sports&pageSize=21&apiKey=${api_key}`)
        res.send(sports_data.data)
    } catch (error) {
        console.log(error)
    }
   

})




module.exports = sports_route