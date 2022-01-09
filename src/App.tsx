import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Test from './components/Test';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/test" />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
