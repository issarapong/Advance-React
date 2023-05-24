import { createSlice } from '@reduxjs/toolkit'

//Create Slice
const initialCounter = {
    count: 500,
    error: '',
};

export const counterSlice = createSlice({
    name: 'couter',
    initialState: initialCounter,
    reducers: {
        increase:(state, action) => {
            //state =={count:52,error: ""}
            //action == {type:"counter/increase", payload:undefiend}
            console.log('increase')

            state.count +=1
            
        },
        decrease:(state, action) => {
            if (state.count == 0) return
            state.count -= 1;
        
        },
        reset: (state, action) => {

            state.count = 0;
        },
    //    increaseWithNum: (state, action) => {
    //     console.log(action)
    //     state.count += action.payload
    //    }
      // รับแบบ Obj
    increaseWithNum: (state, action) => {
        console.log(action)
        const { value, error } = action.payload;
        state.count += value;
        state.error = error;
        
       }

    },
});

//AUTO_GEnnerate : ACTION CREATOR

export const { increase, decrease, reset, increaseWithNum} = counterSlice.actions; // direct export to app.jsx for use


export default counterSlice.reducer;  // expoert to store for dispaly

