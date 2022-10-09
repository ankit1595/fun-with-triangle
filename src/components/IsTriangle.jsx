import React, { useState } from "react";

const IsTriangle = () => {
  const initalAngleInputs = {
    angle1: "",
    angle2: "",
    angle3: "",
  };
  const [angleInputs, setAngleInputs] = useState(initalAngleInputs);
  const [output, setOutput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [textColor, setTextColor] = useState("")

  const { angle1, angle2, angle3 } = angleInputs;

  function angle1Input(e) {
    setAngleInputs((prevInputs) => ({
      ...prevInputs,
      angle1: Number(e.target.value),
    }));
    clearMessage();
  }
  function angle2Input(e) {
    setAngleInputs((prevInputs) => ({
      ...prevInputs,
      angle2: Number(e.target.value),
    }));
    clearMessage();
  }
  function angle3Input(e) {
    setAngleInputs((prevInputs) => ({
      ...prevInputs,
      angle3: Number(e.target.value),
    }));
    clearMessage();
  }
  function checkIsTriangle() {
    clearMessage();

    let sumOfAngles = angle1 + angle2 + angle3;

    if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
      setErrorMessage("Invalid inputs! Try Again");
      return;
    } else {
      if (sumOfAngles === 180) {
        setOutput("Yes! we can call it a Triangle");
        setTextColor("#28a745");
      } else {
        setOutput("Nah! not a valid Triangle");
        setTextColor("#dc3545");
      }
    }
  }

  function resetForm() {
    setAngleInputs(initalAngleInputs);
    clearMessage();
  }
  
  function clearMessage() {
    setErrorMessage("");
    setOutput("");
  }

  return (
    <div>
      <h2>Is Triangle?</h2>
      <label htmlFor="angle1">Angle 1: </label>
      <input type="number" id="angle1" onChange={angle1Input} value={angle1} />
      <label htmlFor="angle2">Angle 2: </label>
      <input type="number" id="angle2" onChange={angle2Input} value={angle2} />
      <label htmlFor="angle3">Angle 3: </label>
      <input type="number" id="angle3" onChange={angle3Input} value={angle3} />
      <button onClick={checkIsTriangle}>Is Triangle?</button>
      <button
        style={{
          backgroundColor: "#dc3545",
          color: "white",
          borderColor: "#dc3545",
        }}
        onClick={resetForm}>
        Reset
      </button>
      <div className="output" style={{ color: errorMessage ? "red" : textColor }}>
        {output}
        {errorMessage}
      </div>
    </div>
  );
};

export default IsTriangle;
