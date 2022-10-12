import { useEffect, useState } from "react";

const useGetPokemon = (): UseGetPokemonReturn => {
  const [loading, setLoading] = useState(true);
  const [pokedex, setPokedex] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("/api/getPokemon")
      .then((res) => res.json())
      .then((res) => setPokedex(res))
      .finally(() => setLoading(false));
  }, []);
  return [pokedex, loading];
};

export default useGetPokemon;
