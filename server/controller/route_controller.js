const axios = require("axios");
const apiKey = process.env.API_KEY;
require("dotenv").config();

exports.hero_page = async (req, res) => {
  try {
    const hero_data = await axios.get(
      ` https://newsdata.io/api/1/news?apikey=${apiKey}&language=en&image=1`
    );
    res.send(hero_data.data);
  } catch (error) {
    console.log(error);
  }
};
exports.business = async (req, res) => {
  try {
    const business_data = await axios.get(
      `https://newsdata.io/api/1/news?apikey=${apiKey}&category=business&language=en&image=1`
    );
    res.send(business_data.data);
  } catch (error) {
    console.log(error);
  }
};
exports.science = async (req, res) => {
  try {
    const science_data = await axios.get(
      `https://newsdata.io/api/1/news?apikey=${apiKey}&category=science&language=en&image=1`
    );
    res.send(science_data.data);
  } catch (error) {
    console.log(error);
  }
};
exports.sports = async (req, res) => {
  try {
    const sports_data = await axios.get(
      `https://newsdata.io/api/1/news?apikey=${apiKey}&category=sports&language=en&image=1`
    );
    res.send(sports_data.data);
  } catch (error) {
    console.log(error);
  }
};
exports.search = async (req, res) => {
  const { search } = req.body;
  try {
    const search_data = await axios.get(
      `https://newsdata.io/api/1/news?apikey=${apiKey}&qInTitle=${search}&language=en&image=1`
    );
    res.send(search_data.data);
  } catch (error) {
    console.log(error);
  }
};
