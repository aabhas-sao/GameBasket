import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import userReducer from './features/userSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;