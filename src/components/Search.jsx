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
      <p>Please provide a Pokémon name or ID to search.</p>
      <form onSubmit={handleSubmit} id="search">
        <label htmlFor="searchBar">Search Pokémon: </label>
        <input
          id="searchBar"
          type="text"
          placeholder="Pokémon ID or Pokémon Name..."
          value={userSearch}
          onChange={(event) => setUserSearch(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {!isValidPokémon && (
        <p className="error">
          Unable to find a pokémon matching the name or ID provided.
        </p>
      )}
    </>
  );
};

export default Search;
