import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function Search() {
  const [inp, setInp] = useState("");
  return (
    <div className="search_div flex h-full justify-center items-center ">
      <div className="search bg-white flex items-center h-[60%] w-full border-2 border-black rounded-2xl relative">
        <input
          type="text"
          className="inp outline-0 w-[85%] ml-4"
          onChange={(e) => setInp(e.target.value)}
        />
        <SearchIcon className="absolute right-4 scale-125 cursor-pointer" />
      </div>
    </div>
  );
}

export default Search;
