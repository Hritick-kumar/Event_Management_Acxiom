import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import VendorLogin from './pages/VendorLogin';
import UserLogin from './pages/UserLogin';
import AdminSignup from './pages/AdminSignup';
import VendorSignup from './pages/VendorSignup';
import UserSignup from './pages/UserSignup';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/signup" element={<AdminSignup />} />
          <Route path="/vendor/login" element={<VendorLogin />} />
          <Route path="/vendor/signup" element={<VendorSignup />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/signup" element={<UserSignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
