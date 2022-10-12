// Next/React
import type { NextPage } from "next";

// Styles
import styles from "../styles/Home.module.css";

// Components
import Pokedex from "../components/Pokedex";
import Team from "../components/Team";

const Home: NextPage = () => {
  return (
    <div className={styles.page}>
      <Pokedex />
      <Team />
    </div>
  );
};

export default Home;
