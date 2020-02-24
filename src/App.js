import React from 'react';
import './assets/css/App.css';

import AppHeader from './components/AppHeader';
import AppDashboard from './components/AppDashboard';

function App() {
  return (
    <div>
      <AppHeader />
      <main>
        <AppDashboard />
      </main>
    </div>
  );
}

export default App;
