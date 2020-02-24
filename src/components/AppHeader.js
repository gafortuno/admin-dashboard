import React from 'react';
import '../assets/css/AppHeader.css';

function AppHeader() {
  return (
    <header>
      <div className="logo">
        <img src={require('../assets/images/logo.png')} />
      </div>
      <nav className="main-navigation">
        <i className="fas fa-bars item" />
        <i className="far fa-bell item">
          <span className="notification-count">8</span>
        </i>
        <div className="account-nav">
          <img className="item"
            src={require('../assets/images/display_pic.jpg')}
            onClick={() => showAccountNavigation()} />
          <div id="accountNavigation"
            className="account-navigation-hidden">
            <div className="account-item">
              <i className="far fa-user" />
              <span>My Account</span>
            </div>
            <div className="account-item">
              <i className="fas fa-lock" />
              <span>Lock Screen</span>
            </div>
            <div className="account-item">
              <i className="fas fa-sign-out-alt" />
              <span>Sign out</span>
            </div>
          </div>
        </div>
        <i className="fas fa-cog item" />
      </nav>
    </header>
  );
}

function showAccountNavigation() {
  const accountNav = document.getElementById('accountNavigation');
  const hidden = 'account-navigation-hidden';
  const visible = 'account-navigation-visible';

  if (accountNav.classList.contains(hidden)) {
    accountNav.classList.add(visible);
    accountNav.classList.remove(hidden);
  } else {
    accountNav.classList.remove(visible);
    accountNav.classList.add(hidden);
  }
}

export default AppHeader;
