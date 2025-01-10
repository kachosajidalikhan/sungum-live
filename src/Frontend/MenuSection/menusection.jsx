import React from "react";
import "./menusection.css"
import {files} from '../../constants/index'

const RestaurantMenu = () => {

  return (
    <>

      <div className="w-full mt-10 mb-4 flex row justify-center items-center pl-4 px-4 ">
        <div className="w-full text-center mb-12">
          <span className="text-[#c59a63] uppercase text-sm font-medium tracking-wide">
            SunGum Hotel
          </span>
          <h2 className="text-[#293941] text-3xl font-bold mt-2">Hotel Menu</h2>
        </div>
        <img src={files.menu} alt="" />
      </div>
    </>
  );
};

export default RestaurantMenu;
