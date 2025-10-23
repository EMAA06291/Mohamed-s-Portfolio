import React from "react";
import "./NeonText.css";

const NeonText = ({ text, size = "100px" , stroke = "10.5px #0a0e23",paddingBottom}) => {
  return (
    <div className="flex justify-center m-0 ">
      <h2
        className="styled"
        data-text={text}
        style={{ fontSize: size, WebkitTextStroke: stroke ,paddingBottom:paddingBottom}}
      >
        {text}
      </h2>
    </div>
  );
};

export default NeonText;
