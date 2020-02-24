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
        <div className="settings-navigation">
          <i className="fas fa-cog item settings-cog" onClick={() => showSettingsNav()} />
          <div id="settingsNavigation" className="settings-navigation-hidden">
            <div className="settings-header">
              <span>Settings</span>
              <i className="far fa-times-circle close-settings" onClick={() => closeSettingsNav()}></i>
            </div>
            <div className="account-profile">
              <img src={require('../assets/images/display_pic.jpg')} />
              <div className="account-information">
                <div className="name">Gio Adrian Fortuno</div>
                <div className="position">Web Admin</div>
              </div>
            </div>
            <div className="basic-settings">
              Basic Settings
            </div>
            <div className="settings-checklist">
              <div className="checklist-item"><span className="checked">✔</span> Notifications</div>
              <div className="checklist-item"><span className="checked">✔</span> API Access</div>
              <div className="checklist-item"><span className="crossed-out">🗙</span> Auto Updates</div>
              <div className="checklist-item"><span className="checked">✔</span> Online Status</div>
              <div className="checklist-item"><span className="checked">✔</span> Auto Payout</div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

/**
 * Show account navigation.
 * @TODO Close on outside click.
 * @TODO Add animation.
 */
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

/**
 * Close settings navigation.
 * @TODO Refactor.
 * @TODO Add animation.
 */
function closeSettingsNav() {
  document.getElementById('settingsNavigation')
    .classList.add('settings-navigation-hidden');
    document.getElementById('settingsNavigation')
    .classList.remove('settings-navigation-visible');
}

/**
 * Close settings navigation.
 * @TODO Refactor.
 * @TODO Add animation.
 */
function showSettingsNav() {
  document.getElementById('settingsNavigation')
    .classList.remove('settings-navigation-hidden');
    document.getElementById('settingsNavigation')
    .classList.add('settings-navigation-visible');
}

export default AppHeader;
