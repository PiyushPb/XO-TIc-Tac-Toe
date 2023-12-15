import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Home from "./page/Home";
import Signup from "./page/Signup";
import Login from "./page/Login";
import VsCpu from "./page/VsCpu";
import Error from "./page/Error";

function App() {
  const [vsCpuFirstTurn, setVsCpuFirstTurn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home setVsCpuFirstTurn={setVsCpuFirstTurn} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/vscpu"
          element={<VsCpu vsCpuFirstTurn={vsCpuFirstTurn} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
