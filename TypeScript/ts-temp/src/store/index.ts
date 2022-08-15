import {createSlice, configureStore, PayloadAction} from '@reduxjs/toolkit';

const initialState = {count: 0, showCounter: true};


const counterSlice = createSlice({
  name    : 'counter',
  initialState,
  reducers: {
    counter(state, action: PayloadAction<number>) {
      state.count = state.count + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});


const store = configureStore({
  reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions;
export type ReducerType = ReturnType<typeof counterSlice.reducer>;
export default store;
