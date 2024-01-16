export type AbilityDetailsType = {
  id: number;
  name: string;
  effect_entries: Array<object>;
  generation: {
    name: string;
    url: string;
  };
  pokemon: object;
};
