import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'

export default configureStore({
    // บอกว่า Store เรามีกี่ slice
    reducer: {
        counter: counterReducer,
    },
});