import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import General from './pages/General/General';
import Pain from './pages/Pain/Pain';
import Hopes from './pages/Hopes/Hopes';
import Competitors from './pages/Competitors/Competitors';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<General />} />
        <Route path="/pain" element={<Pain />} />
        <Route path="/hopes" element={<Hopes />} />
        <Route path="/competitors" element={<Competitors />} />
      </Routes>
    </Router>
  )
}

export default App;
