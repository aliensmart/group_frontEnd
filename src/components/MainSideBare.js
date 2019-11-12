import React from 'react'
import logo from '../images/logo.png';

const MainMenu = ()=>{
    return(
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
    )
}

export default MainMenu