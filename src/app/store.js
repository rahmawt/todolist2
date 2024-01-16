import { configureStore } from '@reduxjs/toolkit';
import {reducer} from './reducer'
import authReducer from "../features/authSlice"

export const store = configureStore({
  
  auth: authReducer,
  reducer: reducer
});

export default store;
