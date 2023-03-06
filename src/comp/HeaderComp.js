import React from "react";
import "../App.css";
import Login from "../AuthLogic";

const HeaderComp = () => {

  return (
    <div className="header">
      <h3 style={{ padding: "20px" }}>Buynance</h3>

      <div className="right_header header">
        <Login/>
        
        <h3 className="hidden">Downloads</h3>
        <h3 className="hidden">English(India)</h3>
        <h3 className="hidden">USD</h3>
      </div>
    </div>
  );
};

export default HeaderComp;

