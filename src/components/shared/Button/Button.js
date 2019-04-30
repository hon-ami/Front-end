import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ text, url, className }) => (
    <Link className={`button ${className}`} to={url}>
      <p>{text}</p>
    </Link>
);


export default Button
