import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Search = () => {
  const { state } = useLocation();
  const { data } = state || { data: [] };
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading ? (
        <div className="text-center mt-5">Loading...</div>
      ) : data.length === 0 ? (
        <div className="text-center mt-5">No content available</div>
      ) : (
        <div className="w-full h-full md:grid grid-cols-3 md:gap-4">
          {data.map((item) => (
            <div
              key={item.source?.id}
              className="w-full h-full md:p-5 border mt-3 md:border-none transition ease-in-out delay-75 hover:scale-90"
            >
              <Link to={item?.url} target="_blank" rel="noopener noreferrer">
                <img
                  className="w-full h-full p-5"
                  src={item?.urlToImage}
                  alt={item?.title}
                />
                <h1 className="text-black text-center">{item?.title}</h1>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
