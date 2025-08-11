import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './slices/cartSlice'

const rootStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
})

export default rootStore