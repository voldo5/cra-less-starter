import logo from "./logo.svg";
import { Button } from "antd";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Button type="primary" className="custom-btn">
        Primary
      </Button>
      <Button className="custom-btn">Button</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
