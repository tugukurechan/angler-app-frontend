// src/layouts/MainLayout.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default MainLayout;
