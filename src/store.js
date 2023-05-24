import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import authReducer from './authSlice'


export default configureStore({
    // บอกว่า Store เรามีกี่ slice
    reducer: {
        auth: authReducer,
        counter: counterReducer,
    },
});