import React from 'react';
import loadergif from '../images/loader.gif';

export const LoadingPage = () => (
  <div className="loader">
    <img
      src={loadergif}
      alt="loader"
      className="loader__image"
    />
  </div>
);
export default LoadingPage;
