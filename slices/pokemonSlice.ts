import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface PokemonTeamState {
  value: PokemonBasicInfo[];
}

const initialState: PokemonTeamState = {
  value: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action: PayloadAction<PokemonBasicInfo>) => {
      state.value = [...state.value, action.payload];
    },
    removePokemon: (state, action: PayloadAction<PokemonBasicInfo>) => {
      state.value = state.value.filter(
        (poke) => poke.name !== action.payload.name
      );
    },
    removeAllPokemon: (state) => {
      state.value = [];
    },
  },
});

export const selectValue = (state: RootState) => state.pokemonTeam.value;

export const { addPokemon, removePokemon, removeAllPokemon } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
