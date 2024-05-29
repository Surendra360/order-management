import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import SaleOrdersPage from './pages/SaleOrdersPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('authenticated');
    setIsAuthenticated(loggedIn === 'true');
    if (!loggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/sale-orders" element={isAuthenticated ? <SaleOrdersPage /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to={isAuthenticated ? "/sale-orders" : "/login"} />} />
    </Routes>
  );
};

export default App;