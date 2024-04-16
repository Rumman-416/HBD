import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Gift = () => {
  const [g1, SetG1] = useState(true);
  const [g2, SetG2] = useState(true);
  const [g3, SetG3] = useState(true);
  const navigation = useNavigate();

  const gift1 = () => {
    navigation("/gift1");
  };
  const gift2 = () => {
    navigation("/gift2");
  };
  const gift3 = () => {
    navigation("/gift3");
  };
  return (
    <div className=" flex flex-col justify-center items-center m-10">
      <h1 className=" text-3xl font-hbd uppercase">great work boi !</h1>
      <img src="images/happyCat.gif" alt="" />
      <h1 className=" text-xl">Now choose your gift Boi</h1>
      <div className=" flex p-10 justify-center items-center">
        <img
          src="images/Gift.png"
          alt=""
          className="  h-16  cursor-pointer"
          onClick={gift1}
        />
        <img
          src="images/Gift.png"
          alt=""
          className="  h-16  cursor-pointer"
          onClick={gift2}
        />
        <img
          src="images/Gift.png"
          alt=""
          className="  h-16  cursor-pointer"
          onClick={gift3}
        />
      </div>
    </div>
  );
};

export default Gift;
