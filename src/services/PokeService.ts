import { Pokemon } from "@/models/Pokemon";
import { api } from "./AxiosService";

class PokeService {
  async getAllPokemon() {
    const { data } = await api.get(`https://pokeapi.co/api/v2/pokemon/ditto`);
    // Instead of res, using { data } here tells our const that it will grab the data object from the response.
    // This is needed as without it, TypeScript will get very upset.
    const pokemon = new Pokemon(
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
    console.log(pokemon);
  }
}

export const pokeService = new PokeService();
