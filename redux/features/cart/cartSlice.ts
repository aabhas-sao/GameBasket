import { createSlice } from "@reduxjs/toolkit";
import products from "../../../testData/products.json";

type CounterState = {
    count: number;
    items: any[];
}

const initialState: CounterState = {
    count: 0,
    items: products
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: state => {
            state.count += 1;
        },
        removeItem: (state, action) => {
            const { id } = action.payload;
            state.items.filter((item) => id !== item.id)
        },
        addItem: (state, action) => {
            state.items.push(action.payload.item);
        }
    }
})

export const { increment, addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer