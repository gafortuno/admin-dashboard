import React from 'react';
import '../assets/css/AppDashboard.css';

function AppDashboard() {
  return (
    <div className="dashboard">
      <div className="title">Dashboard</div>
      <div className="dashboard-widget total-revenue">
        <i className="far fa-heart"></i>
        <span className="widget-data">
          <div className="amount">Php 980, 000</div>
          <div className="type">Total Revenue</div>
        </span>
      </div>
      <div className="dashboard-widget sales">
        <i className="fas fa-shopping-cart"></i>
        <span className="widget-data">
          <div className="amount">765</div>
          <div className="type">Today's Sales</div>
        </span>
      </div>
      <div className="dashboard-widget conversion">
        <i className="far fa-chart-bar"></i>
        <span className="widget-data">
          <div className="amount">0.50%</div>
          <div className="type">Conversion</div>
        </span>
      </div>
      <div className="dashboard-widget visits">
        <i className="far fa-eye"></i>
        <span className="widget-data">
          <div className="amount">6738</div>
          <div className="type">Visits</div>
        </span>
      </div>
    </div>
  );
}

export default AppDashboard;
