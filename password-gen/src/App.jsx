import { useState } from "react";
import "animate.css";

import "./App.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuArrowRight, LuCannabis } from "react-icons/lu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-gradient-to-tr from-slate-900 via-rose-900 to-slate-900 flex justify-center items-center">
      <div className=" flex flex-col items-center  animate__animated animate__bounceIn hover:scale-105 duration-300 p-16 w-lg bg-white rounded-xl bg-gradient-to-r from-slate-700 via-rose-700 to-slate-700 border border-white/20 shadow-xl ">
        <LuCannabis className="text-white w-12 h-12" />
        <h1 className="text-3xl mb-1 font-bold text-white">
          Password Generator
        </h1>
        <form className="w-full">
          <input
            type="number"
            placeholder="Enter password length"
            className=" focus:outline-white text-white w-full bg-black/10 p-3 rounded-lg border border-white/20"
          />
          <button className="bg-green-400 text-white  rounded-lg flex items-center py-3 px-16 mt-5">
            <LuArrowRight />
            Generate
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
