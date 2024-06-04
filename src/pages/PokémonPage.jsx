import { useEffect, useState } from "react";
import Search from "../components/Search";
import { getPokémon } from "../utils/requests";
import Data from "../components/Data";
import CycleButtons from "../components/CycleButtons";

const PokémonPage = () => {
  const [pokémon, setPokémon] = useState();
  const [searchTerm, setSearchTerm] = useState("1");
  const [isValidPokémon, setIsValidPokémon] = useState(true);

  useEffect(() => {
    getPokémon(searchTerm)
      .then(({ data }) => {
        setPokémon(data);
        setIsValidPokémon(true);
      })
      .catch((error) => {
        setIsValidPokémon(false);
      });
  }, [searchTerm]);

  return (
    <>
      <Search setSearchTerm={setSearchTerm} isValidPokémon={isValidPokémon} />
      <CycleButtons pokémon={pokémon} setSearchTerm={setSearchTerm} />
      <Data pokémon={pokémon} />
    </>
  );
};

export default PokémonPage;
