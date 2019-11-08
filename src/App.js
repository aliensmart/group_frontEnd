import React from 'react';
import logo from './images/logo.png';
import profile from './images/Round-Profile-Pic.png'
import './App.css';

function App() {
  return (
    <div className="App main">
      <div className="sideBar">
        <div>
          <img src={logo} alt="LOGO" className="logo"/>
        </div>
        
          Hello I am the sideBare
      </div>
      <div className="content">
        <div className="content_top">
          <div className="search">
              <input type="text" placeholder="search" className="searchInput"/>
              <i className="fas fa-search"></i>
          </div>
          <img src={profile} alt="profile" className="profile"/>
          
        </div>
        <div className="content_bottom">
            I am the main content
        </div>
        
      </div>
    </div>
  );
}

export default App;
