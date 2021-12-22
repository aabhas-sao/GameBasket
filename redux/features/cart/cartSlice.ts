import { createSlice } from "@reduxjs/toolkit";
import products from "../../../testData/products.json";

type CounterState = {
    count: number;
    items: any[];
}

const cartItems = products.map(product => ({
    count: 1,
    product
}))

const initialState: CounterState = {
    count: 0,
    items: cartItems
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state, action) => {
            const { id } = action.payload;
            state.items.map(item => {
                if (id === item.product.id) {
                    item.count += 1;
                }
            });

        },
        decrement: (state, action) => {
            const { id } = action.payload;
            state.items.map(item => {
                if (id === item.product.id) {
                    if (item.count === 1) {
                        return;
                    } else {
                        item.count -= 1;
                    }
                }
                return item;
            });
        },
        removeItem: (state, action) => {
            const { id } = action.payload;
            state.items = state.items.filter((item) => id !== item.product.id)
        },
        addItem: (state, action) => {
            state.items.push(action.payload.item);
        }
    }
})

export const { increment, decrement, addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer