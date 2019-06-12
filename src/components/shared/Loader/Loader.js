import React from 'react';
import './Loader.scss';

const Loader = () => (
  <div className="Loader">
    <p className="Loader-text">
      Loading
      <span className="Loader-dots">.</span>
      <span className="Loader-dots">.</span>
      <span className="Loader-dots">.</span>
    </p>
  </div>
)

export default Loader;
