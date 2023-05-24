import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, reset, increaseWithNum } from "./counterSlice";
import { login, logout, userLogin} from "./authSlice";
function App() {
  //STATE
  //const [count, setCount] = useState(0);  // set stat เริ่มต้น 0 เพื่อเตรียม + stat /จะสัมพันกับ type เช่น ถ้าเริ่มต้นเปน string ก็เอาไป + ไม่ได้

  // ดึงค่าจาก store มาใช้ ผ่าน use seletor
  const counter = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.auth);
  //console.log(counter)

  //เรียกใช้ Dispatch มาใช้งาน
  const dispatch = useDispatch(); // 1  UI ทำแค่ครั้งเดียว

  //LOGIC
  //const increase = () => setCount((p) => p + 1);
  //const decrease = () => setCount((p) => -1);
  //const reset = () => setCount(0);

  //UI DISPLAY
  return (
    <div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl">Redux 😄</h1>
        <h3>Count : {counter.count} </h3>
        <div className="flex gap-4">
          <button
            children
            className="bg-slate-300 px-4 py-2 rouded-sm"
            onClick={() => dispatch(decrease())}
          >
            -
          </button>
          <button
            children
            className="bg-slate-300 px-4 py-2 rouded-sm"
            onClick={() => dispatch(reset())}
          >
            reset
          </button>
          {/* ส่ง update ผ่าน Dispatch ตรงๆไปหา CounterSlice */}
          <button
            children
            className="bg-slate-300 px-4 py-2 rouded-sm"
            onClick={() => dispatch(increase())}
          >
            +
          </button>
        </div>
        {/* ส่ง update ผ่าน Dispatch ตรงๆไปหา CounterSlice  add payload*/}
        {/* <button
            children
            className="bg-slate-300 px-4 py-2 rouded-sm"
            onClick={()=>dispatch(increaseWithNum(5))}
          >
            Increse with 5
          </button> */}

        {/* ส่งแแบบ obj */}
        <button
          children
          className="bg-slate-300 px-4 py-2 rouded-sm"
          onClick={() =>
            dispatch(increaseWithNum({ value: 5, error: "not error" }))
          }
        >
          Increse with 5
        </button>
      </div>
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
            dispatch(userLogin())
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
    </div>
  );
}

export default App;
