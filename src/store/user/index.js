import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hero: {},
  map: {},
  items: [],
  monsters: [],
  gold: 0,

  heroMonsterIndex: null,
  isGameOver: false
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
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((m, i) => i !== action.payload);
    },
    addGold: (state, action) => {
      state.gold += parseInt(action.payload);
    },
    removeGold: (state, action) => {
      state.gold -= action.payload;
    },
    addMonsterToFight: (state, action) => {
      state.heroMonsterIndex = action.payload;
    },
    heroMonsterDamage: (state, action) => {
      state.monsters[state.heroMonsterIndex].hp -= action.payload.damage;
      if (state.monsters[state.heroMonsterIndex].hp <= 0) {
        state.monsters.splice(state.heroMonsterIndex, 1);
      }
      if (state.monsters.length === 0) {
        state.isGameOver = true;
      }
    },

    restart: state => {
      state.hero = {};
      state.map = {};
      state.items = [];
      state.monsters = [];
      state.gold = 0;
    }
  }
});

export const {
  addHero,
  addMonster,
  addItem,
  addMap,
  addGold,
  removeHero,
  removeMonster,
  removeItem,
  addMonsterToFight,
  heroMonsterDamage,
  restart
} = userSlice.actions;

export default userSlice.reducer;
