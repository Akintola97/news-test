const express = require("express");
const hero_route = express.Router();
require("dotenv").config();
const axios = require("axios");
const api_key = process.env.API_KEY;

hero_route.get("/", async (req, res) => {
  try {
    const hero_data = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=21&apiKey=${api_key}`
    );
    res.send(hero_data.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = hero_route;
