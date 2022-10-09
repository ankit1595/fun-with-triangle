import { useState } from "react";

import "./App.css";
import Hypotenuse from "./components/Hypotenuse";
import IsTriangle from "./components/IsTriangle";
import TriangleQuiz from "./components/TriangleQuiz";
import TriangleArea from "./components/TriangleArea";
import twitterLogo from "./images/brand-logos/logo-twitter.svg";
import linkedinLogo from "./images/brand-logos/logo-linkedin.svg";
import githubLogo from "./images/brand-logos/logo-github.svg";
import mailLogo from "./images/brand-logos/mail.svg";
import angelLogo from "./images/brand-logos/angel-icon.svg";

function App() {
  const defaultNav = "nav1";
  const [nav, setNav] = useState(defaultNav);
  return (
    <div className="App">
      <header>
        <nav className="navigation">
          <span className="nav-brand">Fun with Triangle</span>
          <ul className="list-non-bullet nav-pills">
            <li
              className={`list-item-inline link ${
                nav === "nav1" ? "active" : ""
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setNav("nav1")}
              // className={nav === "nav1" && "active"}
            >
              Is Triangle?
            </li>

            <li
              style={{ cursor: "pointer" }}
              onClick={() => setNav("nav2")}
              className={`list-item-inline link ${
                nav === "nav2" ? "active" : ""
              }`}>
              Triangular Quiz
            </li>
            <li
              style={{ cursor: "pointer" }}
              onClick={() => setNav("nav3")}
              className={`list-item-inline link ${
                nav === "nav3" ? "active" : ""
              }`}>
              Calculate Hypotenuse
            </li>
            <li
              style={{ cursor: "pointer" }}
              onClick={() => setNav("nav4")}
              className={`list-item-inline link ${
                nav === "nav4" ? "active" : ""
              }`}>
              Calculate Area
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {nav === "nav1" && <IsTriangle />}
        {nav === "nav2" && <TriangleQuiz />}
        {nav === "nav3" && <Hypotenuse />}
        {nav === "nav4" && <TriangleArea />}
      </main>

      <footer className="footer">
        <div className="footer-header">
          © | 2022 |{" "}
          <a
            className="link"
            href="http://ankit-sharma15.netlify.app"
            target={"_blank"}>
            Ankit Sharma
          </a>{" "}
        </div>
        <ul className="list-non-bullet link-social">
          <li className="list-item-inline">
            <a
              className="link"
              href="https://twitter.com/ankit1595"
              target="_blank">
              <img src={twitterLogo} alt="twitter-logo" />
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://github.com/ankit1595"
              target="_blank">
              <img src={githubLogo} alt="github-logo" />
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://www.linkedin.com/in/ankit1595"
              target="_blank">
              <img src={linkedinLogo} alt="linkedin-logo" />
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="mailto:ankit.95sharma@gmail.com"
              target="_blank">
              <img src={mailLogo} alt="mail-logo" />
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://www.angel.co/u/ankit1595"
              target="_blank">
              <img src={angelLogo} alt="angel-logo" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
