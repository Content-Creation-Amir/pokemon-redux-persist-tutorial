// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetPokemonReturn>
) {
  let results: GetPokemonReturn = [];

  let rawDexData = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  );
  let dexData = await rawDexData.json();
  let dexResultsArray = dexData["results"];

  results = dexResultsArray.map((poke: PokemonRawInfo, id: number) => {
    let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      id + 1
    }.png`;
    return {
      ...poke,
      name: poke.name.charAt(0).toUpperCase() + poke.name.slice(1),
      image,
    };
  });

  res.status(200).json(results);
}
