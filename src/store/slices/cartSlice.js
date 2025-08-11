import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    total: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.items.push(action.payload);
            state.total += 1;
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;