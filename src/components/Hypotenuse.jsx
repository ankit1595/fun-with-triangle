import React, { useState } from "react";

const Hypotenuse = () => {
  const initialSides = { base: "", height: "" };
  const [sides, setSides] = useState(initialSides);
  const [output, setOutput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [textColor, setTextColor] = useState("");

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
    if (base <= 0 || height <= 0) {
      setErrorMessage("Invalid inputs! Try Again");
      return;
    }
    const hypotenuse = Math.sqrt(base ** 2 + height ** 2).toFixed(2);
    setOutput(`The length of hypotenuse is ${hypotenuse}`);
    setTextColor("#28a745");
  }

  function clearMessage() {
    setErrorMessage("");
    setOutput("");
  }

  function resetForm() {
    setSides(initialSides);
    clearMessage();
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
      <button
        style={{
          backgroundColor: "#dc3545",
          color: "white",
          borderColor: "#dc3545",
        }}
        onClick={resetForm}>
        Reset
      </button>
      <div
        className="output"
        style={{ color: errorMessage ? "red" : textColor }}>
        {output}
        {errorMessage}
      </div>
    </div>
  );
};

export default Hypotenuse;
