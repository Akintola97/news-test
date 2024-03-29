import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import backendUrl from "../config";

const Hero = () => {
  const [heroinfo, setHeroInfo] = useState([{}]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const hero_data = await axios.get(`${backendUrl}/headline/hero`);
      const articles = hero_data.data?.results;
      console.log(articles)
      
      if (articles && articles.length > 0) {
        const randomIndex = Math.floor(Math.random() * articles.length);
        const randomArticle = articles[randomIndex];
        setHeroInfo(randomArticle);
        console.log(hero_data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <>
      <div className="w-full md:h-[100vh] h-[50vh] relative">
        <div className="md:w-[100vw] w-full md:h-[100vh] h-full">
          <img
            className="w-full h-full"
            key={heroinfo?.article_id}
            src={heroinfo?.image_url}
            alt={heroinfo?.title}
          />
        </div>
        <div className="absolute md:w-[40%] w-full bottom-[10%] left-0 p-5 bg-gradient-to-b from-black">
          <h1 className="text-white font-bold text-[3vmin]">
            {heroinfo?.title}
          </h1>
          <div className="w-full h-full md:pt-5 pt-2 flex justify-around">
            <Link
              className="text-white font-bold mr-2 p-1 bg-green-500 rounded-xl text-[2.5vmin]"
              to={heroinfo?.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>READ</button>
            </Link>
            <button
              onClick={fetchData}
              className="text-white p-1 rounded-xl bg-yellow-400 font-bold text-[2.5vmin]"
              to={heroinfo?.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
