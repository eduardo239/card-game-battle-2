import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../api';
import { DB_URI, TIME_DELAY } from '../../util/constants';

const initialState = {
  name: 'Game App Battle',
  heroes: [],
  monsters: [],
  items: [],
  maps: [],
  map: {},
  positions: [],
  position: 0,
  positionType: '',
  dice: 0,
  trickOrTreating: {},
  enemy: {},
  modal: {
    isSelectingMonster: false,
    isShopping: false,
    isUnknown: false,
    isUsingItem: false,
    isFighting: false,
    isBoss: false,
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
      state.modal.isSelectingMonster = false;
      state.modal.isFighting = true;
    },
    toggleUnknownModal: state => {
      state.modal.isUnknown = !state.modal.isUnknown;
    },
    toggleIsFightingModal: state => {
      state.enemy =
        state.monsters[Math.floor(Math.random() * state.monsters.length)];
      state.modal.isFighting = true;
    },
    toggleRewardModal: state => {
      state.modal.isReward = !state.modal.isReward;
    },
    generateRandomItem: state => {
      const randomItem =
        state.items[Math.floor(Math.random() * state.items.length)];
      state.trickOrTreating = randomItem;
    },
    enemyMonsterDamage: (state, action) => {
      state.enemy.hp -= action.payload.damage;
    },
    restart: state => {
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
  startLoading,
  hasError,
  setRandomNumber,
  getNewPosition,
  checkPositionType,
  toggleShopModal,
  toggleSelectMonsterModal,
  toggleUnknownModal,
  toggleIsFightingModal,
  toggleRewardModal,
  addMap,
  generateRandomItem,
  enemyMonsterDamage,
  restart
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
