import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
      <div className="pa2">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="search here"
          onChange={searchChange} // Pass the function reference, not invoking it
        />
      </div>
    );
  };

export default SearchBox; 