// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isAuthenticated: false };

// We can use createSlice to create a reducer and actions at the same time with help of redux toolkit!
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// We use createReducer to create a reducer function without redux toolkit!
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { counter: state.counter + 1, showCounter: state.showCounter };
//     case 'decrement':
//       return { counter: state.counter - 1, showCounter: state.showCounter };
//     case 'increase':
//       return {
//         counter: state.counter + action.value,
//         showCounter: state.showCounter,
//       };
//     case 'toggle':
//       return {
//         counter: state.counter,
//         showCounter: !state.showCounter,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
