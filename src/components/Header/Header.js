import React from 'react';
import graminphome from "../../Assets/simlogo/Grameenphone-Logo.png";
import banglalink from "../../Assets/simlogo/banglalink.png";
import robi from "../../Assets/simlogo/robi.png";
import bondhoSim from "../../Assets/simlogo/bondhosim.png";

const Header = () => {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mx-4">
        <div className="border scale-60 hover:scale-75 ease-in duration-500 rounded-lg p-4 bg-lime-300">
          <img className="w-64 " src={graminphome} alt="" />
        </div>
        <div className="border scale-60 hover:scale-75 ease-in duration-500 rounded-lg p-4 bg-emerald-300">
          <img className="w-36" src={banglalink} alt="" />
        </div>
        <div className="border scale-60 hover:scale-75 ease-in duration-500 rounded-lg p-4 bg-purple-300">
          <img className="w-40" src={robi} alt="" />
        </div>
        <div className="border scale-60 hover:scale-75 ease-in duration-500 rounded-lg p-4 bg-sky-300">
          <img className="w-64" src={bondhoSim} alt="" />
        </div>
      </div>
    );
};

export default Header;