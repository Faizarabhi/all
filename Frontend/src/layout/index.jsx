import React from 'react';
import AuthenticatedHeader from '../components/AuthenticatedHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children, isAuthenticated }) => {
  return (
    <div className="layout">
      {isAuthenticated ? <AuthenticatedHeader /> : <Header />}
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
