import { useState } from "react";

const Search = ({ setSearchTerm, isValidPokémon }) => {
  const [userSearch, setUserSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setUserSearch("");

    if (userSearch.trim().length > 0) {
      setSearchTerm(userSearch.toLowerCase());
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="search">
        <label htmlFor="searchBar">Search Pokémon (name or id): </label>
        <input
          id="searchBar"
          type="text"
          placeholder="Pokémon Name or ID ..."
          value={userSearch}
          onChange={(event) => setUserSearch(event.target.value)}
        />
        <button id="searchButton" type="submit">
          Search
        </button>
      </form>
      {!isValidPokémon && (
        <p className="error">
          Unable to find a pokémon matching the name or ID provided
        </p>
      )}
    </>
  );
};

export default Search;
