import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link
          to="/dashboard"
          className="header__title"
        >
          <h1>Boilerplate</h1>
        </Link>
        <button
          onClick={() => startLogout()}
          className="button button--link"
        >
          Logout
        </button>
      </div>
    </div>
  </header>
);

export default connect(null, {
  startLogout,
})(Header);
