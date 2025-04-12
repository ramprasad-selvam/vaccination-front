import React from "react";
import "./Layout.css";
import { Link } from "react-router-dom";

const DashboardLayout = ({ children, heading }) => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">{heading}</div>
        <nav className="nav-links">
          <Link to="/">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/logout">Logout</Link>
        </nav>
      </aside>

      <div className="main-area">
        <main className="content">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
