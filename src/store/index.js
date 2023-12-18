// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

// We can use createSlice to create a reducer and actions at the same time with help of redux toolkit!
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.value;
    },
    toggleCouter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// We use createReducer to create a reducer fungiont without redux toolkit!
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
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
