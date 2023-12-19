// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

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

// My Store uses multiple Store Slices!
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});


export default store;
