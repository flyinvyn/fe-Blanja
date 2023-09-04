import React from 'react';
import Navbar from '../components/navbar/navbar';
import NavbarLogin from '../components/navbar/navlog';

const RequireLogin = () => {
  const isLogin = localStorage.getItem('token');
  if (!isLogin) {
    return <NavbarLogin />;
  }
  return <Navbar/>;
};

export default RequireLogin;