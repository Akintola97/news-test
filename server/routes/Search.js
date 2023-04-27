const express = require('express');
const search_route = express.Router();
const axios = require('axios');
require('dotenv').config();
const api_key = process.env.api_key


search_route.post('/', async (req, res)=>{

    const {search} = req.body
    try {
        const search_data = await axios.get(`https://newsapi.org/v2/everything?q=${search}&searchIn=title&pageSize=21&language=en&apiKey=${api_key}`);
        res.send(search_data.data.articles)
    } catch (error) {
        console.log(error);
    }
    
})





module.exports = search_route;