import React from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

function Menu({ showMenu }) {
  return (
    <div className={`menu ${showMenu ? 'show' : ''}`}>
      <div className="menu-container">
          <div className="left">
            <h3>Browser</h3>
              <p><Link to="popular">Popular</Link></p>
              <p><a href="">New</a></p>
              <p><a href="">Movies</a></p>
              <p><a href="">Hindi Movies</a></p>
              <h3>Genres</h3>
          </div>
          <div className="right">
              <p><a href="">Action</a></p>
              <p><a href="">Adventure</a></p>
              <p><a href="">Comedy</a></p>
              <p><a href="">Drama</a></p>
              <p><a href="">Fantasy</a></p>
              <p><a href="">Psychological</a></p>
              <p><a href="">Romance</a></p>
              <p><a href="">School</a></p>
              <p><a href="">Echhi</a></p>
              <p><a href="">Harem</a></p>
              <p><a href="">Action</a></p>
              <p><a href="">Adventure</a></p>
              <p><a href="">Comedy</a></p>
              <p><a href="">Drama</a></p>
              
          </div>
      </div>
    </div>
  );
}

export default Menu;
