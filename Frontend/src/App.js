import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/Dashboard';
import Layout from './layout/Layout';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuthentication = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Layout isAuthenticated={isAuthenticated}>
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? <Dashboard /> : <Home toggleAuthentication={toggleAuthentication} />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
