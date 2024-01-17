import { Pokemon } from "@/models/Pokemon";
import { api } from "./AxiosService";
import AppState from "@/Appstate";
import { AbilityDetails } from "@/models/AbilityDetails";
import { AbilityDetailsType } from "@/types/AbilityDetailsType";
import { PokemonResults } from "@/models/PokemonResults";

class PokeService {
  async getAllPokemon(offset: number) {
    // Instead of res, using { data } here tells our const that it will grab the data object from the response.
    // This is needed as without it, TypeScript will get very upset.
    const { data } = await api.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=9&offset=${offset}`
    );
    for (let pokemon of data.results) {
      pokemon = new PokemonResults(pokemon.name, pokemon.url);
      /* Due to the way the pokeAPI works, grabbing using this request url will only get us a pokemon's name and url.
       * In order to manage this limitation I added a for loop that will grab the url off of each pokemon and use api.get on it. */
      const { data } = await api.get(pokemon.url);
      AppState.listOfPokemon.push(
        new Pokemon(
          data.id,
          data.name,
          data.order,
          data.height,
          data.weight,
          data.base_experience,
          data.sprites,
          data.abilities,
          data.moves,
          data.forms
        )
      );
    }
  }
  async getAbilityInfo(abilityUrlOne: string, abilityUrlTwo?: string) {
    AppState.activeAbilityOne = <AbilityDetailsType>{};
    AppState.activeAbilityTwo = <AbilityDetailsType>{};
    // TODO Change this if into a switch/short-circuit.
    const { data } = await api.get(abilityUrlOne);
    const abilityOne = new AbilityDetails(
      data.id,
      data.name,
      data.effect_entries,
      data.generation,
      data.pokemon
    );
    AppState.activeAbilityOne = abilityOne;
    console.log(`[From PokeService]`, AppState.activeAbilityOne);
    if (abilityUrlTwo != undefined) {
      const { data } = await api.get(abilityUrlTwo);
      const abilityTwo = new AbilityDetails(
        data.id,
        data.name,
        data.effect_entries,
        data.generation,
        data.pokemon
      );
      AppState.activeAbilityTwo = abilityTwo;
      console.log(`[From PokeService]`, AppState.activeAbilityTwo);
    }
  }
}

export const pokeService = new PokeService();
