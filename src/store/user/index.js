import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hero: {},
  map: {},
  items: [],
  monsters: []
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addHero: (state, action) => {
      state.hero = action.payload;
    },
    removeHero: state => {
      state.hero = {};
    },
    addMonster: (state, action) => {
      state.monsters.push(action.payload);
    },
    removeMonster: (state, action) => {
      state.monsters = state.monsters.filter((m, i) => i !== action.payload);
    },
    addMap: (state, action) => {
      state.map = action.payload;
    },
    removeMap: state => {
      state.map = {};
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((m, i) => i !== action.payload);
    }
  }
});

export const {
  addHero,
  addMonster,
  addItem,
  addMap,
  removeHero,
  removeMap,
  removeMonster,
  removeItem
} = userSlice.actions;

export default userSlice.reducer;
