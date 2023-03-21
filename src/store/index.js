import { configureStore } from '@reduxjs/toolkit'
import cart from "./cartSlice"
import auth from "./authSlice"

export default configureStore({ reducer: { cart, auth } })