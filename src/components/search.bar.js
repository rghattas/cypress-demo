import React from "react";
// import PropTypes from "prop-types";

const SearchBar = ({ defaultValue, history }) => {
  const handleKeyPress = event => {
    if (event.key !== "Enter") {
      return;
    }
    const term = event.target.value;
    if (term.trim() !== "") {
      history.push({ pathname: "/search", search: `q=${term}` });
    } else {
      history.push({ pathname: "/" });
    }
  };

  return (
    <input
      id="search-bar"
      type="text"
      placeholder="Search for a gif"
      defaultValue={defaultValue}
      onKeyPress={handleKeyPress}
    />
  );
};

export default SearchBar;
