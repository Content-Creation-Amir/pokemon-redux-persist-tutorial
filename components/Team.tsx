// Styles
import styles from "../styles/Team.module.css";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { selectValue, removeAllPokemon } from "../slices/pokemonSlice";

const Team = () => {
  const myTeam = useSelector(selectValue);
  const dispatch = useDispatch();

  return (
    <div className={styles.teamContainer}>
      <h1 className={styles.header}>My Team</h1>
      {myTeam.length ? (
        <div className={styles.teamWrapper}>
          <div className={styles.teamListing}>
            {myTeam.map((poke: PokemonBasicInfo) => (
              <div key={poke.name} className={styles.pokemon}>
                <img src={poke.image} alt={poke.name} />
                <h1 className={styles.pokemonName}>{poke.name}</h1>
              </div>
            ))}
          </div>
          <button
            className={styles.clearButton}
            onClick={() => {
              dispatch(removeAllPokemon());
            }}
          >
            Reset
          </button>
        </div>
      ) : (
        <h1 className={styles.emptyMessage}>
          Click on a Pokémon to add it to your team!
        </h1>
      )}
    </div>
  );
};

export default Team;
