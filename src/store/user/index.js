import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hero: {},
  map: {},
  items: [],
  monsters: [],
  gold: 0,
  heroMonster: {},
  heroMonsterIndex: null
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
    removeMap: state => {
      state.map = {};
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((m, i) => i !== action.payload);
    },
    addGold: (state, action) => {
      state.gold += action.payload;
    },
    removeGold: (state, action) => {
      state.gold -= action.payload;
    },
    addMonsterToFight: (state, action) => {
      state.heroMonster = action.payload.monster;
      state.heroMonsterIndex = action.payload.i;
    },
    heroMonsterDamage: (state, action) => {
      state.heroMonster.hp -= action.payload.damage;
      if (state.heroMonster.hp < 1) {
        state.heroMonster = {};
        state.monsters.splice(state.heroMonsterIndex, 1);
      }
    },
    restart: state => {
      state.hero = {};
      state.map = {};
      state.items = [];
      state.monsters = [];
      state.gold = 0;
      state.heroMonster = {};
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
  removeItem,
  addMonsterToFight,
  heroMonsterDamage,
  restart
} = userSlice.actions;

export default userSlice.reducer;
