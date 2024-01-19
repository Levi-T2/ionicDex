import { Pokemon } from "@/models/Pokemon";
import { api } from "./AxiosService";
import AppState from "@/Appstate";
import { AbilityDetails } from "@/models/AbilityDetails";
import { AbilityDetailsType } from "@/types/AbilityDetailsType";
import { PokemonResults } from "@/models/PokemonResults";
import { TypeInfoType } from "@/types/TypeInfoType";
import { TypeResults } from "@/models/TypeResults";

class PokeService {
  async getAllPokemon(offset: number) {
    // Instead of res, using { data } here tells our const that it will grab the data object from the response.
    // This is needed as without it, TypeScript will get very upset.
    const { data } = await api.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=18&offset=${offset}`
    );
    for (let pokemon of data.results) {
      pokemon = new PokemonResults(pokemon.name, pokemon.url);
      /* Due to the way the pokeAPI works, grabbing using this request url will only get us a pokemon's name and url.
       * In order to manage this limitation I added a for loop that will grab the url off of each pokemon and use api.get on it. */
      const { data } = await api.get(pokemon.url);
      // console.log(`[From PokeService]`, data);
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
          data.forms,
          data.types
        )
      );
    }
    // console.log(`[From PokeService]`, AppState.listOfPokemon);
  }
  async getAbilityInfo(abilityUrl: string) {
    if (Object.keys(AppState.activeAbilityOne).length == 0) {
      AppState.activeAbilityOne = <AbilityDetailsType>{};
      const { data } = await api.get(abilityUrl);
      const abilityOne = new AbilityDetails(
        data.id,
        data.name,
        data.effect_entries,
        data.generation,
        data.pokemon
      );
      AppState.activeAbilityOne = abilityOne;
      // console.log(`[From PokeService]`, AppState.activeAbilityOne);
    } else {
      AppState.activeAbilityTwo = <AbilityDetailsType>{};
      const { data } = await api.get(abilityUrl);
      const abilityTwo = new AbilityDetails(
        data.id,
        data.name,
        data.effect_entries,
        data.generation,
        data.pokemon
      );
      AppState.activeAbilityTwo = abilityTwo;
      // console.log(`[From PokeService]`, AppState.activeAbilityTwo);
    }
  }
  async searchPokemon(pokemonName: string) {
    const { data } = await api.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    AppState.searchedPokemon = new Pokemon(
      data.id,
      data.name,
      data.order,
      data.height,
      data.weight,
      data.base_experience,
      data.sprites,
      data.abilities,
      data.forms,
      data.types
    );
    // console.log(`[From PokeService]`, AppState.searchedPokemon);
  }
  async getTypeInfo(typeUrl: string) {
    if (Object.keys(AppState.activeTypeOne).length == 0) {
      const { data } = await api.get(typeUrl);
      AppState.activeTypeOne = <TypeInfoType>{};
      AppState.activeTypeOne = new TypeResults(
        data.id,
        data.name,
        data.damage_relations
      );
      console.log(`[From PokeService]`, AppState.activeTypeOne);
    } else {
      const { data } = await api.get(typeUrl);
      AppState.activeTypeTwo = <TypeInfoType>{};
      AppState.activeTypeTwo = new TypeResults(
        data.id,
        data.name,
        data.damage_relations
      );
      console.log(`[From PokeService]`, AppState.activeTypeTwo);
    }
  }
}

export const pokeService = new PokeService();
