import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.js"
import Content from "./components/Content.js";

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/App.css"

function App() {

  return (
    <BrowserRouter>
        <div className="App">
          <Navbar />
          <Content />
        </div>
    </BrowserRouter>
  );
}

export default App;
