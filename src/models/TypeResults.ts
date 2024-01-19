type damageRelations = {
  name: string;
  url: string;
};

export class TypeResults {
  id: number;
  name: string;
  damage_relations: {
    double_damage_from: Array<damageRelations>;
    double_damage_to: Array<damageRelations>;
    half_damage_from: Array<damageRelations>;
    half_damage_to: Array<damageRelations>;
    no_damage_from: Array<damageRelations>;
    no_damage_to: Array<damageRelations>;
  };

  constructor(
    id: number,
    name: string,
    damage_relations: {
      double_damage_from: Array<damageRelations>;
      double_damage_to: Array<damageRelations>;
      half_damage_from: Array<damageRelations>;
      half_damage_to: Array<damageRelations>;
      no_damage_from: Array<damageRelations>;
      no_damage_to: Array<damageRelations>;
    }
  ) {
    this.id = id;
    this.name = name;
    this.damage_relations = damage_relations;
  }
}
