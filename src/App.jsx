import "./App.css";
import Hypotenuse from "./components/Hypotenuse";
import IsTriangle from "./components/IsTriangle";
import TriangleQuiz from "./components/TriangleQuiz";
import TriangleArea from "./components/TriangleArea";
import { useState } from "react";

function App() {
  const defaultNav = "nav1";
  const [nav, setNav] = useState(defaultNav);
  return (
    <div className="App">
      <h1>Fun with Triangle</h1>
      <nav>
        <ul>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setNav("nav1")}
            className={nav === "nav1" && "active"}>
            Is Triangle?
          </li>

          <li
            style={{ cursor: "pointer" }}
            onClick={() => setNav("nav2")}
            className={nav === "nav2" && "active"}>
            Triangular Quiz
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setNav("nav3")}
            className={nav === "nav3" && "active"}>
            Calculate Hypotenuse
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setNav("nav4")}
            className={nav === "nav4" && "active"}>
            Calculate Area
          </li>
        </ul>
      </nav>
      {nav === "nav1" && <IsTriangle />}
      {nav === "nav2" && <TriangleQuiz />}
      {nav === "nav3" && <Hypotenuse />}
      {nav === "nav4" && <TriangleArea />}
      <footer>
        <p>© | 2021 | Ankit Sharma</p>
        <ul className="list-unordered inline-list">
          <li>
            <a
              className="links"
              href="https://github.com/ankit1595/"
              target="_blank">
              <img src="" />
            </a>
          </li>
          <li>
            <a
              className="links"
              href="https://twitter.com/ankit1595"
              target="_blank">
              <img src="" alt="twitter" />
            </a>
          </li>
          <li>
            <a className="links" href="" target="_blank">
              <img src="" alt="" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
