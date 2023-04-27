const express = require('express');
const business_route = express.Router();
const axios = require('axios');
require('dotenv').config();
const api_key = process.env.api_key


business_route.get('/', async(req, res)=>{
    try {
        const business_data = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=21&apiKey=${api_key}`)
        res.send(business_data.data)
    } catch (error) {
        console.log(error)
    }


})




module.exports = business_route
