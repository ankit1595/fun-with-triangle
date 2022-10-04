import React, { useState } from "react";

const correctAnswers = [
  "90",
  "one right angle",
  "right angled",
  "Equilateral triangle",
  //   "right angled",
  //   "one right angle",
  //   "12, 16, 20",
  //   "Equilateral triangle",
  //   "100°",
  //   "30°",
  //   "a + b + c",
  //   "no",
  //   "45°",
];
const TriangleQuiz = () => {
  const [score, setScore] = useState(0);

  function submitForm(e) {
    e.preventDefault();
    setScore(0);
    const formResult = new FormData(e.target);
    let index = 0;
    for (let value of formResult.values()) {
      if (value === correctAnswers[index]) {
        setScore((prevScore) => prevScore + 1);
      }
      index = index + 1;
    }
  }

  return (
    <div>
      <form className="quiz-form" onSubmit={submitForm}>
        <div>
          <p>
            What is the third angle for the triangle where angle1 = 45° and
            angle2 = 45°?
          </p>
          <label>
            <input type="radio" value="45" name="question1" />
            45°
          </label>
          <label>
            <input type="radio" value="90" name="question1" />
            90°
          </label>
          <label>
            <input type="radio" value="60" name="question1" />
            60°
          </label>
        </div>

        <div>
          <p>A triangle can have: </p>
          <label>
            <input type="radio" value="one right angle" name="question2" />
            one right angle
          </label>
          <label>
            <input type="radio" value="two right angles" name="question2" />
            two right angles
          </label>
        </div>

        <div>
          <p>
            What is the third angle for the triangle where angle1 = 45° and
            angle2 = 45°?
          </p>
          <label>
            <input type="radio" value="obtuse" name="question3" />
            obtuse
          </label>
          <label>
            <input type="radio" value="acute" name="question3" />
            acute
          </label>
          <label>
            <input type="radio" value="right angled" name="question3" />
            right angled
          </label>
        </div>

        <div>
          <p>Which of the following triangles are always similar?</p>
          <label>
            <input type="radio" value="Equilateral triangle" name="question4" />
            Equilateral triangle
          </label>
          <label>
            <input type="radio" value="Isosceles triangle" name="question4" />
            Isosceles triangle
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <h3>The score is {score}</h3>
    </div>
  );
};

export default TriangleQuiz;
