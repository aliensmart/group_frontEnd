import React from 'react';
import logo from './images/logo.png';
import profile from './images/Round-Profile-Pic.png'
import './App.css';

import UserHome from './components/LoggedView/User/Home'

function App() {
  const token = sessionStorage.getItem("token")
  let content = null
  if(!token){
    content = (
      <div>
      <form>
        <label for="username">Username</label>
        <input type="text" placeholder="username" id="username"/>
        <label for="password">Password</label>
        <input type="text" placeholder="password" id="password"/>
        <input type="button" value="login"/>
      </form>
      <a href="#">Don't have an account?</a>
      </div>
    )
  }

  return (
    <div className="App main">
      <div className="sideBar">
        <div>
          <img src={logo} alt="LOGO" className="logo"/>
        </div>
        
          <ul className="nav">
            <li className="nav_item">
              <a href="#" className="nav_item_content" >Link1</a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_item_content" >Link2</a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_item_content" >Link3</a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_item_content" >Link4</a>
            </li>
          </ul>
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
            <UserHome/>
            <div className="content_bottom_sidebare">
              <button className="btn btn_main btn_black">Create new File</button>
              <button className="btn btn_main btn_white">Upload file</button>
              <button className="btn btn_main btn_white">Upload directory</button>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
