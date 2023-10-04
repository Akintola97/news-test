const express = require('express');
const api_key = process.env.API_KEY
const axios = require('axios');



exports.hero_page = async(req, res) =>{
    try {
        const hero_data = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&pageSize=21&apiKey=${api_key}`
        );
        res.send(hero_data.data);
      } catch (error) {
        console.log(error);
      }
}
exports.business = async(req, res) =>{
   try {
    const business_data = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=21&apiKey=${api_key}`
    );
    res.send(business_data.data);
  } catch (error) {
    console.log(error);
  }
}
exports.science = async(req, res) =>{
    try {
        const science_data = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=21&apiKey=${api_key}`
        );
        res.send(science_data.data);
      } catch (error) {
        console.log(error);
      }
}
exports.sports = async(req, res) =>{
    try {
        const sports_data = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=21&apiKey=${api_key}`
        );
        res.send(sports_data.data);
      } catch (error) {
        console.log(error);
      }
}
exports.search = async(req, res) =>{
    try {
        const sports_data = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=21&apiKey=${api_key}`
        );
        res.send(sports_data.data);
      } catch (error) {
        console.log(error);
      }
}