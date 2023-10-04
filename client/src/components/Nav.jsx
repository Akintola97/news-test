import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import backendUrl from "../config";

const Nav = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearch("");

    try {
      const search_data = await axios.post(
        `${backendUrl}/headline/search`,
        { search }
      );
      const searchResults = search_data.data.articles
      navigate("/search", { state: { data: searchResults } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-black w-full h-[7vh] flex justify-between items-center sticky top-0 z-50">
      <Link to={"/"}>
        <h1 className="text-white p-5 font-bold">NEWS</h1>
      </Link>
      <div>
        <form className="p-3" onSubmit={handleSubmit}>
          <input
            className="bg-transparent focus:outline-none border-b text-white cursor-pointer"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="text-white bg-green-500 rounded-md p-1.5">
            {" "}
            <AiOutlineSearch className="text-[2.0vmin]" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Nav;
