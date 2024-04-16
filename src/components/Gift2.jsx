import React from "react";
import { Link } from "react-router-dom";

const Gift2 = () => {
  return (
    <div className=" flex flex-col justify-center items-center m-10 gap-10">
      <h1 className=" text-3xl"> Congratulations! </h1>
      <img src="images/Gcat.gif" alt="" />
      <h1 className=" text-xl text-center">
        {" "}
        You got the biggest gift i.e Me😤
      </h1>
      <h1 className=" text-xl text-center">
        Meet me till 11am near station and dont be late😺
      </h1>
      <h1 className=" text-2xl text-center font-medium">
        & BTW Happy Birthday Boi 🤩
      </h1>
      <Link to="/boi-gift">
        <input
          type="button"
          value="Back"
          className="border-2 border-red-500 bg-yellow-300 h-10 w-20 rounded-lg cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Gift2;
