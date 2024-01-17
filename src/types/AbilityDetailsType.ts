export type AbilityDetailsType = {
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
};
