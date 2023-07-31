import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CopyLab from "./pages/CopyLab";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CopyLab />} />
      </Routes>
    </Router>
  );
};

export default App;
