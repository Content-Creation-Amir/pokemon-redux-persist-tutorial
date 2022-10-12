type PokemonRawInfo = {
  name: string;
  url: string;
};

type PokemonBasicInfo = {
  name: string;
  url: string;
  image: string;
};

type GetPokemonReturn = PokemonBasicInfo[];

type UseGetPokemonReturn = [GetPokemonReturn, boolean];
