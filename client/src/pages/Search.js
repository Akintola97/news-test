import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const { data } = location.state || { data: [] };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="w-full h-full md:grid grid-cols-3 md:gap-4">
      {isLoading ? (
        <div className="text-center mt-5">Loading...</div>
      ) : data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.article_id}
            className="w-full h-full md:p-5 border mt-3 md:border-none transition ease-in-out delay-75 hover:scale-90"
          >
            <Link to={item.link} target="_blank" rel="noopener noreferrer">
              <img
                className="w-full h-[30vh] p-5"
                src={item.image_url}
                alt={item.title}
              />
              <h1 className="text-black text-center">{item.title}</h1>
            </Link>
          </div>
        ))
      ) : (
        <div className="text-center mt-5">No content available</div>
      )}
    </div>
  );
};

export default Search;
