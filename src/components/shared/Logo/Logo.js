import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import './Logo.scss';

const Logo = () => (
  <Link to='/' className="Logo-container">
    <div className="Logo-img-container">
      <img src={logo} alt="logo" className="Logo-img" />
    </div>
  </Link>
);

export default Logo;
