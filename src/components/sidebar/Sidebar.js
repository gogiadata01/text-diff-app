import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">🦉</span>
          <span className="logo-text">ENAGRAM</span>
        </div>
        <div className="mobile-menu-btn">☰</div>
      </div>

      <nav className="menu-group">
        <div className="menu-item">
          <span className="icon">✓</span> <span className="m-text">მართლწერის შემოწმება</span>
        </div>
        <div className="menu-item active">
          <span className="icon">⇄</span> <span className="m-text">ტექსტის შედარება</span>
        </div>
        <div className="menu-item">
          <span className="icon">🎙</span> <span className="m-text">ხმა → ტექსტი</span>
        </div>
        <div className="menu-item">
          <span className="icon">🔊</span> <span className="m-text">ტექსტი → ხმა</span>
        </div>
        <div className="menu-item">
          <span className="icon">📄</span> <span className="m-text">PDF კონვერტაცია</span>
        </div>
      </nav>
    </aside>
  );
};

  export default Sidebar;