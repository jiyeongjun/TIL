import {createSlice, configureStore, PayloadAction} from '@reduxjs/toolkit';

const initialCounterState = {value: 0, showCounter: true};


const counterSlice = createSlice({
  name        : 'counter',
  initialState: initialCounterState,
  reducers    : {
    counter(state, action: PayloadAction<number>) {
      state.value = state.value + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

const initialAuthState = {
  isAuthenticated: false
}

const authSlice = createSlice({
  name        : 'authentication',
  initialState: initialAuthState,
  reducers    : {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth   : authSlice.reducer
  }
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export type ReducerType = ReturnType<typeof store.getState>;
export default store;
