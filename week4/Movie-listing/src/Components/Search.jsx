import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
<div className="flex justify-center">
<div className="flex items-center border border-gray-400 rounded px-4 py-2 w-full bg-white">
<img src="/search.svg" alt="search" className="w-5 h-5 mr-3" />
<input type="text"
        className="w-full text-black text-sm  placeholder-gray-500 focus:outline-none"
        placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
