import React from "react";
import "./Cell.css";

const Cell = ({ isLit, onClick }) => {
  return (
    <div className={`Cell ${isLit ? "Cell-lit" : ""}`} onClick={onClick}></div>
  );
};

export default Cell;
