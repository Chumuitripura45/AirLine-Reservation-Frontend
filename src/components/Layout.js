// Layout.js

import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;