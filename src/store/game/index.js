import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Game App Battle'
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setName: (state, action) => {
      console.log(action);
      state.name = action.payload;
    }
  }
});

export const { setName } = gameSlice.actions;

// game = nome do reducer em store/index
export const selectName = state => state.game.name;

export default gameSlice.reducer;
