export type TypeInfoType = {
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
};

type damageRelations = {
  name: string;
  url: string;
};
