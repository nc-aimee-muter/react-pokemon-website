import axios from "axios";

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getPokemon = (searchTerm) => pokeApi.get(`/pokemon/${searchTerm}`);
