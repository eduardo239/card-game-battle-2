import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../api';
import { DB_URI, TIME_DELAY } from '../../util/constants';

const initialState = {
  name: 'Game App Battle',
  heroes: [],
  hero: {
    won: false,
    gold: 0
  },
  monsters: [],
  items: [],
  maps: [],
  map: {},
  enemy: {},
  enemyMonsterDown: false,
  heroMonsterDown: false,
  positions: [],
  position: 0,
  positionType: '',
  dice: 0,
  gift: {},
  modal: {
    isShopping: false,
    isSelectingMonster: false,
    isUsingItem: false,
    isFighting: false,
    isBoss: false,
    // items
    isUnknown: false,
    isItem: false,
    isReward: false
  },
  status: {
    isLoading: false,
    isError: false,
    isStarted: false,
    isOn: true,
    isOver: false
  }
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startLoading: state => {
      state.status.isLoading = true;
    },
    hasError: state => {
      state.status.isError = true;
      state.status.isLoading = false;
    },
    heroSuccess: (state, action) => {
      state.heroes = action.payload;
      state.status.isLoading = false;
    },
    monstersSuccess: (state, action) => {
      state.monsters = action.payload;
      state.status.isLoading = false;
    },
    itemsSuccess: (state, action) => {
      state.items = action.payload;
      state.status.isLoading = false;
    },
    mapsSuccess: (state, action) => {
      state.maps = action.payload;
      state.status.isLoading = false;
    },
    removeMap: state => {
      state.map = {};
    },
    removeEnemy: state => {
      state.enemy = {};
    },
    setRandomNumber: (state, action) => {
      state.dice = action.payload;
    },
    getNewPosition: state => {
      state.position += state.dice;
      state.positionType = state.positions[state.position];
    },
    checkPositionType: state => {
      if (state.positionType === 'FIGHT') {
        state.modal.isSelectingMonster = true;
      } else if (state.positionType === 'ITEM') {
        state.modal.isItem = true;
        // generate random item
        let r = state.items[Math.floor(Math.random() * state.items.length)];
        state.gift = r;
      } else if (state.positionType === '???') {
        state.modal.isUnknown = true;
      } else if (state.positionType === '_') {
        // NONE: do nothing
      } else if (state.positionType === 'BOSS') {
        state.modal.isBoss = true;
      } else {
        console.log('else');
      }
    },
    addMap: (state, action) => {
      state.positions = [];
      state.positions = action.payload.positions;
      state.map = {};
      state.map = action.payload.map;
    },
    toggleShopModal: state => {
      state.modal.isShopping = !state.modal.isShopping;
    },
    toggleSelectMonsterModal: state => {
      state.modal.isSelectingMonster = !state.modal.isSelectingMonster;
    },
    toggleUseItemModal: state => {
      state.modal.isUsingItem = !state.modal.isUsingItem;
    },
    closeItemModal: state => {
      state.modal.isItem = false;
      state.modal.isUnknown = false;
      state.modal.isReward = false;
    },
    openFightingModal: state => {
      state.enemy =
        state.monsters[Math.floor(Math.random() * state.monsters.length)];
      state.modal.isFighting = true;
    },
    closeFightingModal: (state, action) => {
      state.modal.isFighting = false;
      // state.modal.isReward  = false;
      state.enemyMonsterDown = false;
      state.heroMonsterDown = false;
      state.enemy = {};

      if (action.payload.gift) {
        let r = state.items[Math.floor(Math.random() * state.items.length)];
        state.gift = r;
        state.modal.isReward = true;
      }
    },
    generateRandomItem: state => {
      let r = state.items[Math.floor(Math.random() * state.items.length)];
      state.gift = r;
    },
    getPrize: (state, action) => {
      if (action.payload.won) {
        state.hero.gold += action.payload.gold;
      }
    },
    enemyMonsterDamage: (state, action) => {
      state.enemy.hp -= action.payload.damage;
      if (state.enemy.hp <= 0) {
        state.enemyMonsterDown = true;
        state.enemy = {};
      }
    },

    restart: state => {
      state.position = 0;
      state.dice = 0;
      state.map = {};
      state.positions = [];
      state.positionType = '';
    },
    endGame: state => {
      state.status.isOn = false;
      state.status.isOver = true;
      //
      state.position = 0;
      state.dice = 0;
      state.map = {};
      state.positions = [];
      state.positionType = '';
    }
  }
});

// actions
export const {
  heroSuccess,
  monstersSuccess,
  itemsSuccess,
  mapsSuccess,
  removeMap,
  removeEnemy,
  startLoading,
  hasError,
  setRandomNumber,
  getNewPosition,
  getPrize,
  checkPositionType,
  toggleShopModal,
  toggleSelectMonsterModal,
  toggleUseItemModal,
  openFightingModal,
  closeFightingModal,
  closeItemModal,
  addMap,
  generateRandomItem,
  enemyMonsterDamage,
  restart,
  endGame
} = gameSlice.actions;

export default gameSlice.reducer;

// fun
export const getRandomNumber = (min, max) => dispatch => {
  let end = 0;

  let int = setInterval(() => {
    if (end >= 9) {
      clearInterval(int);
    }
    dispatch(
      setRandomNumber(Math.floor(Math.random() * (max - min + 1)) + min)
    );
    end++;
  }, TIME_DELAY);
};

// async
export const fetchHeroes = () => async dispatch => {
  dispatch(startLoading());
  try {
    console.log(DB_URI);
    const { data } = await api.get(DB_URI);
    dispatch(heroSuccess(data.heroes));
  } catch (err) {
    console.log('[Error] ' + err.message);
    dispatch(hasError(err.message));
  }
};

export const fetchMonsters = () => async dispatch => {
  dispatch(startLoading());
  try {
    const { data } = await api.get(DB_URI);
    dispatch(monstersSuccess(data.monsters));
  } catch (err) {
    console.log('[Error] ' + err.message);
    dispatch(hasError(err.message));
  }
};

export const fetchMaps = () => async dispatch => {
  dispatch(startLoading());
  try {
    const { data } = await api.get(DB_URI);
    dispatch(mapsSuccess(data.maps));
  } catch (err) {
    console.log('[Error] ' + err.message);
    dispatch(hasError(err.message));
  }
};

export const fetchItems = () => async dispatch => {
  dispatch(startLoading());
  try {
    const { data } = await api.get(DB_URI);
    dispatch(itemsSuccess(data.items));
  } catch (err) {
    console.log('[Error] ' + err.message);
    dispatch(hasError(err.message));
  }
};
