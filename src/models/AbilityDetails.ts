export class AbilityDetails {
  id: number;
  name: string;
  effect_entries: {
    effect: string;
    language: {
      name: string;
      url: string;
    };
    short_effect: string;
  }[];
  generation: {
    name: string;
    url: string;
  };
  pokemon: object;

  constructor(
    id: number,
    name: string,
    effect_entries: {
      effect: string;
      language: {
        name: string;
        url: string;
      };
      short_effect: string;
    }[],
    generation: {
      name: string;
      url: string;
    },
    pokemon: object
  ) {
    this.id = id;
    this.name = name;
    this.effect_entries = effect_entries;
    this.generation = generation;
    this.pokemon = pokemon;
  }
}
