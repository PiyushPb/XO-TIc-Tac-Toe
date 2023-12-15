import { useState } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Home from "./page/Home";
import Signup from "./page/Signup";
import Login from "./page/Login";
import Error from "./page/Error";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
