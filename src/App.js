import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={require('./assets/images/logo.png')} />
        </div>
        <nav className="main-navigation">
          <i className="fas fa-bars item"></i>
          <i className="far fa-bell item">
          <span className="notification-count">8</span>
          </i>
          <img className="item" src={require('./assets/images/display_pic.jpg')} />
          <i className="fas fa-cog item"></i>
        </nav>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
