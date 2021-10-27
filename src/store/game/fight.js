import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'ghost',
  hero: {},
  enemy: {},
  hit: 0,
  heroWin: false,
  enemyWin: false
};

export const fightSlice = createSlice({
  name: 'fight',
  initialState,
  reducers: {
    test: (state, action) => {
      state.name = action.payload;
    }
  }
});

export const { test } = fightSlice.actions;

export const selectFightName = state => state.fight.name;

export default fightSlice.reducer;
