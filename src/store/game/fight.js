import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'ghost',
  hero: {
    monster: {},
    monsterIndex: null,
    win: false
  },
  enemy: {
    monster: {}
  }
};

export const fightSlice = createSlice({
  name: 'fight',
  initialState,
  reducers: {
    setName: (state, action) => {
      console.log(action);
      state.name = action.payload;
    }
  }
});

export const { setName } = fightSlice.actions;

export const selectFightName = state => state.fight.name;

export default fightSlice.reducer;
