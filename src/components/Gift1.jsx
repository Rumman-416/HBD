import React from "react";
import { Link } from "react-router-dom";

const Gift1 = () => {
  return (
    <div className=" flex flex-col justify-center items-center m-10 gap-10">
      <h1 className=" text-3xl"> Oh no! </h1>
      <img src="images/circleCat.gif" alt="" />
      <h1 className=" text-2xl text-center"> You owe me Rs.50 🗿</h1>
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

export default Gift1;
