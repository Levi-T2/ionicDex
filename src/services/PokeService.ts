import { Pokemon } from "@/models/Pokemon";
import { api } from "./AxiosService";
import AppState from "@/Appstate";
import { AbilityDetails } from "@/models/AbilityDetails";
import { AbilityDetailsType } from "@/types/AbilityDetailsType";

class PokeService {
  async getAllPokemon(offset: number) {
    const { data } = await api.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=3&offset=${offset}`
    );
    // Instead of res, using { data } here tells our const that it will grab the data object from the response.
    // This is needed as without it, TypeScript will get very upset.
    for (const pokemon of data.results) {
      const { data } = await api.get(pokemon.url);
      // console.log(data);
      const mon = new Pokemon(
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
      );
      AppState.listOfPokemon.push(mon);
    }
    /* Due to the way the pokeAPI works, grabbing using this request url will only get us a pokemon's name and url.
     * In order to manage this limitation I added a for loop that will grab the url off of each pokemon and use api.get on it. */
    console.log(AppState.listOfPokemon);
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
