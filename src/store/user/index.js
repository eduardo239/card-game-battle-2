import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  name: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setUserName: (state, action) => {
      state.name = action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount, setUserName } =
  userSlice.actions;

export const selectCount = state => state.user.value;
export const selectUserName = state => state.user.name;

export default userSlice.reducer;
