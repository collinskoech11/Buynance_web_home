import React from "react";
import "../App.css";
import Login from "../AuthLogic";
import Buynancelogo from "../assets/buyn.png";

const HeaderComp = () => {
  return (
    <div className="header">
      <div className="name_logo_container">
        <img src={Buynancelogo} alt="buynance top" />
        <h3>Buynance</h3>
      </div>

      <div className="right_header header">
        <Login />

        <h3 className="hidden">Downloads</h3>
        <h3 className="hidden">English(Kenya)</h3>
        <h3 className="hidden">KES</h3>
      </div>
    </div>
  );
};

export default HeaderComp;
