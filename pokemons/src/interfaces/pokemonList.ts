export interface IPokemonListReponse {
  count: number;
  next?: string;
  previous?: string;
  results: SmallPokemon[];
}

export interface SmallPokemon {
  id: number;
  name: string;
  url: string;
  img: string;
}
