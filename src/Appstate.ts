import { reactive } from "vue";
import { Pokemon } from "./models/Pokemon";
import { AbilityDetailsType } from "./types/AbilityDetailsType";

// NOTE AppState is a reactive object to contain app level data
const AppState = reactive({
  listOfPokemon: <Pokemon[]>[],

  activeAbilityOne: <AbilityDetailsType>{},

  activeAbilityTwo: <AbilityDetailsType>{},
});
export default AppState;
