import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppNavbar from "./components/AppNavbar.js"
import Content from "./components/Content.js";

import "bootstrap/dist/css/bootstrap.min.css";
import { Stack } from "react-bootstrap";

function App() {

  return (
    <BrowserRouter>
      <Stack gap={4}>
        <AppNavbar />
        <Content />
      </Stack>
    </BrowserRouter>
  );
}

export default App;
