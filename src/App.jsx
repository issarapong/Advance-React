import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //STATE
  const [count, setCount] = useState(0);  // set stat เริ่มต้น 0 เพื่อเตรียม + stat /จะสัมพันกับ type เช่น ถ้าเริ่มต้นเปน string ก็เอาไป + ไม่ได้

  //LOGIC
  const increase = () => setCount((p) => p + 1);
  const decrease = () => setCount((p) => -1);
  const reset = () => setCount(0);

  //UI DISPLAY
  return (
    <div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl">Redux 😄</h1>
        <h3>Count : {count}</h3>
        <div className="flex gap-4">
          <button
            children
            className="bg-slate-300 px-4 py-2 rouded-sm"
            onClick={decrease}
          >
            -
          </button>
          <button
            children
            className="bg-slate-300 px-4 py-2 rouded-sm"
            onClick={reset}
          >
            reset
          </button>
          <button
            children
            className="bg-slate-300 px-4 py-2 rouded-sm"
            onClick={increase}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
