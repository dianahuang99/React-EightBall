import React, { useState } from "react";
import "./EightBall.css";

const EightBall = (props) => {
  const changeColorAndMsg = () => {
    const randNum = Math.floor(Math.random() * props.answers.length);
    setColor(props.answers[randNum].color);
    setMsg(props.answers[randNum].msg);
  };
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  return (
    <div
      onClick={changeColorAndMsg}
      style={{
        backgroundColor: color,
      }}
      id="eightBall"
    >
      <p style={{ color: "white" }}>{msg}</p>
    </div>
  );
};

export default EightBall;
