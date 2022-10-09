import React, { useState } from "react";

const Hypotenuse = () => {
  const [sides, setSides] = useState({ base: "", height: "" });
  const [output, setOutput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleInputs(e) {
    setSides({
      ...sides,
      [e.target.name]: Number(e.target.value),
    });
    clearMessage();
  }
  function calculateHypotenuse() {
    clearMessage();
    const { base, height } = sides;
    if (base < 0 || height < 0) {
      setErrorMessage("Invalid inputs! Try Again");
      return;
    }
    const hypotenuse = Math.sqrt(base ** 2 + height ** 2).toFixed(2);
    setOutput(`The length of hypotenuse is ${hypotenuse}`);
  }

  function clearMessage() {
    setErrorMessage("");
    setOutput("");
  }

  return (
    <div>
      <h2>Calculate Hypotenuse of a triangle</h2>
      <label htmlFor="base">Enter base value (a) = </label>
      <input
        type="number"
        id="base"
        name="base"
        onChange={handleInputs}
        value={sides.base}
      />
      <label htmlFor="height">Enter height value (b) =</label>
      <input
        type="number"
        id="height"
        name="height"
        onChange={handleInputs}
        value={sides.height}
      />
      <button onClick={calculateHypotenuse}>Calculate hypotenuse</button>
      <div style={{ color: errorMessage && "red" }}>
        {output}
        {errorMessage}
      </div>
    </div>
  );
};

export default Hypotenuse;
