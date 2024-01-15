export class Pokemon {
  id: number;
  name: string;
  order: number;
  height: number;
  weight: number;
  base_experience: number;
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  };
  abilities: Array<object>;
  forms: Array<object>;

  constructor(
    id: number,
    name: string,
    order: number,
    height: number,
    weight: number,
    base_experience: number,
    sprites: {
      back_default: string;
      back_shiny: string;
      front_default: string;
      front_shiny: string;
    },
    abilities: Array<object>,
    forms: Array<object>
  ) {
    this.id = id;
    this.name = name;
    this.order = order;
    this.height = height;
    this.weight = weight;
    this.base_experience = base_experience;
    this.sprites = sprites;
    this.abilities = abilities;
    this.forms = forms;
  }
}
