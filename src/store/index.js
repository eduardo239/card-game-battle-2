import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import gameReducer from './game';
import fightReducer from './game/fight';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    user: userReducer,
    fight: fightReducer
  }
});
