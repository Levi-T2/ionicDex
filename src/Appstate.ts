import { reactive } from "vue";
import { Pokemon } from "./models/Pokemon";
import { AbilityDetailsType } from "./types/AbilityDetailsType";
import { TypeInfoType } from "./types/TypeInfoType";

// NOTE AppState is a reactive object to contain app level data
const AppState = reactive({
  listOfPokemon: <Pokemon[]>[],

  activeAbilityOne: <AbilityDetailsType>{},

  activeAbilityTwo: <AbilityDetailsType>{},

  searchedPokemon: <Pokemon>{},

  activeTypeOne: <TypeInfoType>{},

  activeTypeTwo: <TypeInfoType>{},
});
export default AppState;
