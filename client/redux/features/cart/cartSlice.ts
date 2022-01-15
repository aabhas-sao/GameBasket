import { createSlice } from "@reduxjs/toolkit";
// import products from "../../../testData/products.json";

type CounterState = {
    count: number;
    items: any[];
}

// const cartItems = products.map(product => ({
//     count: 1,
//     product
// }))

const initialState: CounterState = {
    count: 0,
    items: []
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
            state.count -= 1;
            state.items = state.items.filter((item) => id !== item.product.id)
        },
        addItem: (state, action) => {
            const id = state.items.filter(item => item.product.id === action.payload.item.id);
            if (id.length == 1) return;

            state.count += 1;
            state.items.push({ count: 1, product: action.payload.item });
        },
        initialize: (state, action) => {
            const { count, items } = action.payload;
            state.count = count;
            state.items = items;
        }
    }
})

export const { increment, decrement, addItem, removeItem, initialize } = cartSlice.actions

export default cartSlice.reducer