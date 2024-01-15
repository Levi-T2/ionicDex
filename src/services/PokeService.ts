import { Pokemon } from "@/models/Pokemon";
import { api } from "./AxiosService";
import AppState from "@/Appstate";

class PokeService {
  async getAllPokemon() {
    const { data } = await api.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=3`
    );
    // Instead of res, using { data } here tells our const that it will grab the data object from the response.
    // This is needed as without it, TypeScript will get very upset.
    for (const pokemon of data.results) {
      const { data } = await api.get(pokemon.url);
      const mon = new Pokemon(
        data.id,
        data.name,
        data.order,
        data.height,
        data.weight,
        data.base_experience,
        data.sprites,
        data.abilities,
        data.forms
      );
      AppState.listOfPokemon.push(mon);
    }
    /*
     * Due to the way the pokeAPI works, grabbing using this request url will only get us a pokemon's name and url.
     * In order to manage this limitation I added a for loop that will grab the url off of each pokemon and use api.get on it.
     */
    console.log(AppState.listOfPokemon);
  }
}

export const pokeService = new PokeService();
