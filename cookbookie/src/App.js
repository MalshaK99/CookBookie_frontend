import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginP from './Pages/login';
import Signup from './Pages/signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginP />} />
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
