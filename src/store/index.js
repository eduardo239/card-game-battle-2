import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import gameReducer from './game';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    user: userReducer
  }
});