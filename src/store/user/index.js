import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hero: {},
  map: {},
  items: [],
  monsters: [],
  gold: 300,

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
    buyItem: (state, action) => {
      if (state.gold > action.payload.price) {
        state.items.push(action.payload);
        state.gold -= action.payload.price;
      }
    },
    userUseItem: (state, action) => {
      state.items.splice(action.payload.i, 1);

      switch (action.payload.item.type) {
        case 'heal':
          console.log('heal');
          state.hero.hp += action.payload.item.value;
          break;
        case 'mana':
          console.log('mana');
          state.hero.mp += action.payload.item.value;
          break;
        case 'poison':
          console.log('poison');
          // TODO:
          break;
        case 'damage':
          // TODO:
          break;
        case 'gold':
          state.gold += action.payload.item.value;
          break;
        default:
          break;
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
  buyItem,
  userUseItem,
  removeHero,
  removeMonster,
  removeItem,
  addMonsterToFight,
  heroMonsterDamage,
  restart
} = userSlice.actions;

export default userSlice.reducer;
