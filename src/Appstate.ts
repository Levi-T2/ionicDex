import { reactive } from "vue";
import { Pokemon } from "./models/Pokemon";

// NOTE AppState is a reactive object to contain app level data
const AppState = reactive({
  listOfPokemon: <Pokemon[]>[],
});
export default AppState;
