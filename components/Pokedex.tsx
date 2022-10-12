// Styles
import styles from "../styles/Pokedex.module.css";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, removePokemon, selectValue } from "../slices/pokemonSlice";

// Hook
import useGetPokemon from "../hooks/useGetPokemon";

const Pokedex = () => {
  const [pokedex, loading] = useGetPokemon();
  const myTeam = useSelector(selectValue);
  const myTeamNames = myTeam.map((poke) => poke.name);
  const dispatch = useDispatch();

  function handleClick(poke: PokemonBasicInfo) {
    if (myTeamNames.length == 6 && !myTeamNames.includes(poke.name)) {
      alert(
        "You can only have 6 Pokémon in your team! Remove one Pokémon to add another."
      );
      return;
    }
    if (!myTeamNames.includes(poke.name)) dispatch(addPokemon(poke));
    else dispatch(removePokemon(poke));
  }

  return (
    <div className={styles.pokedexWrapper}>
      <h1 className={styles.pokedexTitle}>Kanto Pokédex</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className={styles.pokedex}>
            {pokedex.map((poke: PokemonBasicInfo) => (
              <div
                key={poke.name}
                className={
                  myTeamNames.includes(poke.name)
                    ? styles.pokemonChosen
                    : styles.pokemon
                }
                onClick={() => handleClick(poke)}
              >
                <img src={poke.image} alt={poke.name} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Pokedex;
