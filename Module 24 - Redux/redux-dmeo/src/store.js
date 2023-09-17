import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import inputReducer from './inputReducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    input: inputReducer
  },
});