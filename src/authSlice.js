import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    user: null,
    token: '',
    isAdmin: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            // console.log(action.payload);
            state.user = action.payload;
            state.token = action.payload.token;
            state.isAdmin = action.payload.isAdmin;
        },
        logout: (state, action) => {
            // state = initialState;
            state.user = null;
            state.token = '';
            state.isAdmin = false;
        },
    },
});
// Auto gen => action Creators
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;


//async Logic
//REDUX TRUNK
//Higher order Function 
// - ฟังชั่นที่รับ พารามิเตอร์ เป็น function ได้ และ/หรือ
// - ฟังชั่นที่ รีเทินค่า เป็น Fuction

export const userLogin = (userId) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${userId}`
            );
            const fullName = response.data.name;
            const user = {
                firstName: fullName.split(' ')[0],
                lastName: fullName.split(' ')[1],
                token: 'mock_token',
                isAdmin: true,
            };
            dispatch(login(user));
        } catch (error) {
            console.log(error);
        }
    };
};