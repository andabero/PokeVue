import axios from "axios";

var apliClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getPokemones(pag = 1, perpage = 28) {
    return apliClient.get(
      "/pokemon?offset=" + perpage * (pag - 1) + "&limit=" + perpage
    );
  },
  getPokemon(id) {
    return apliClient.get("/pokemon/" + id);
  }
};
