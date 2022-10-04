import "./App.css";
import Hypotenuse from "./components/Hypotenuse";
import IsTriangle from "./components/IsTriangle";
import TriangleQuiz from "./components/TriangleQuiz";
import TriangleArea from "./components/TriangleArea";

function App() {
  return (
    <div className="App">
      {/* <IsTriangle /> */}
      {/* <TriangleQuiz /> */}
      {/* <Hypotenuse /> */}
      <TriangleArea />
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
