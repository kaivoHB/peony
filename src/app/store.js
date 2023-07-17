import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../pages/login/LoginSlice';
import cartReducer from '../pages/detail/DetailSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
