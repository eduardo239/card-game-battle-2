import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../api';
import { DB_URI, TIME_DELAY } from '../../util/constants';

const initialState = {
  name: 'Game App Battle',
  map: {},
  heroes: [],
  monsters: [],
  items: [],
  maps: [],
  positions: [],
  position: 0,
  dice: 0,
  gift: {},
  status: {
    isLoading: false,
    isError: false,
    isFighting: false,
    isSelectingMonster: false,
    isBuying: false,
    isGifting: false,
    isStarted: false,
    isOn: true,
    isUsingItem: false,
    isOver: false,
    isShopModalOpen: false
  }
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.status.isLoading = true;
    },
    hasError: (state, action) => {
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
    },
    toggleShopModal: state => {
      state.status.isShopModalOpen = !state.status.isShopModalOpen;
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
  toggleShopModal
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
    console.log(DB_URI);
    const { data } = await api.get(DB_URI);
    dispatch(itemsSuccess(data.items));
  } catch (err) {
    console.log('[Error] ' + err.message);
    dispatch(hasError(err.message));
  }
};
