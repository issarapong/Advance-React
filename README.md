# Redux

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--m5BdPzhS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/riadAin.gif" alt="redux-flow" loading="lazy" width="880" height="660" data-animated="true" id="animated-0" class="ff-image">
## Redux (single point of truth)
- ไม่ต้องส่ง props
- redux = context+Reducer

## Setup tailwind


## Implement Redux
$npm install @reduxjs/toolkit react-redux

## Create Redux Store
 
 1. Create file store.js and  import  
 ```
 import { configureStore } from "@reduxjs/toolkit";
 ```
2. สร้าง Store แล้ว Export ไปให้ผู้ปอื่นใช้

```

export default configureStore({
    reducer: {},
});
```

3. Import and config to main.jsx
```
import { Provider } from 'react-redux'
import store from './store.js'
```
```
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  ````


  * 1 store มี state หลายตัว  1 ตัวคือ 1 slice เช่น


  3. create file counterSlice.js and import

  ```
import { createSlice } from '@reduxjs/toolkit'

createSlice({
    name: 'couter',
    initialState: {},
    reducers: {},
});

  ```

4. create slice

```
//Create Slice
const initialCounter = {
    count: 5,
    error: '',
};

export const counterSlice = createSlice({
    name: 'couter',
    initialState: initialCounter,
    reducers: {},
});

export default counterSlice.reducer;  // expoert to store

```

5. add couter slice to store.js and config key value

```
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});
```

* install Redux dev tool https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en


6. consume ค่าไปใช้ ให้ import to app.jsx

```
import { useSelector } from "react-redux";
```

```
  // ดึงค่าจาก store มาใช้
   const counter = useSelector(state => state.counter)
   console.log(counter)
```

ดึงค่ามาใช้

```
   <h3>Count : {counter.count}</h3>
```


## ขากลับ
```
Dispatch = คือฟังชั่นที่ใช้ update State
ACTION =  Javascript Object
{
  type: "Addtodo",
  payload : {
    ss:sss
  }

}
```
*เวลา Dispatch จะส่ง action ไปด้วย action จะมี  ข้อมูลของdata ไป กระทำ


7 import use dispatch to app.jsx

```
import { useSelector,useDispatch } from "react-redux";


const dispatch = useDispatch()

```


8. add fuction ใน reducer ขแง counter slice

```
export const counterSlice = createSlice({
    name: 'couter',
    initialState: initialCounter,
    reducers: {
        increase:() => {},
        decrease:() => {},
        reste: () => {},
    },
});


export const { increase, decrease, reset} = counterSlice.actions; // export function ไป ใช้ กับ  Dispatch

```


9 import function มาใช้ ที่ app.jsx

```
import {increase} from './counterSlice'


// เรียกใช้

 <button
            children
            className="bg-slate-300 px-4 py-2 rouded-sm"
            onClick={ ()=>dispatch(increase())}
          >
```

Full import and use

```
import { increase, decrease, reset} from './counterSlice'

```

# Full reducer

```
    reducers: {
        increase:(state, action) => {
            //state =={count:52,error: ""}
            //action == {type:"counter/increase", payload:undefiend}
            console.log('increase')

            state.count +=1
            
        },
        decrease:(state, action) => {
            state.count -= 1;
        },
        reset: (state, action) => {

            state.count = 0;
        },
    },
});

```


## เพิ่ม ทีละ 5 
```
conterSlice.js

  
       increaseWithNum: (state, action) => {
        state.count +=5
       }

app.jsx
       onClick={()=>dispatch(increaseWithNum(5))}

```       

# Authenticate--------------------------------

In authSlice.js
```
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user: null,
    token: '',
    isAdmin: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
});

export default authSlice.reducer; //export to store
```
In store.js
```
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
```

add to app.jsx

```
  <div className="mt-12 text-center">
        {auth.user ? (
          <h1 className="my-4">
            user: {auth.user.firstName}, {auth.user.lastName}
          </h1>
        ) : (
          <h1 className="my-4"> you are guest</h1>
        )}
        <button
          children
          className="bg-slate-300 px-4 py-2 rouded-sm"
          onClick={() =>
            dispatch(login({ username: "codecamp14", password: "0000" }))
          }
        >
          login
        </button>

        <button
          children
          className="bg-slate-300 px-4 py-2 rouded-sm"
          onClick={() => dispatch(logout())}
        >
          logout
        </button>
      </div>
```
add use selector to app.jsx
```

   const counter = useSelector(state => state.auth)

   ```
   import
```
   import { login, logout} from "./authSlice";

```

authSlice.js

```
const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
         const { username, password} = action.payload;
         if(username == "codecamp14" && password == "0000") {
            state.user = { userId: 1, firstName: 'Codecamp', lastName: 'Softwarepark'};
            state.token = 'mocktoken';
            state.isAdmin = true;
         }
        },
        logout: (state, action) => {
            state.user = null;
            state.token = '';
            state.isAdmin = false;

        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer; //export to store
```


## install axios
 npm i axios

 ## import axios to authSlice
```
 import axios from 'axios';

 ```