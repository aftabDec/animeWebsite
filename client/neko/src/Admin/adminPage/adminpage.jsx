import React, { useState, useEffect } from 'react';
import "../adminPage/adminPag.css"

import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons';
// AdminPage.jsx



const AdminPage = () => {
  const [users, setUsers] = useState([]); // State to store fetched users

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/kitsune/Admin'); // Replace with your API endpoint
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <>
      <nav className="navbar">
      <Link to="/" className="navbar-link">
  <FontAwesomeIcon icon={faHome} className="navbar-icon" />
  Home
</Link>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
    </nav>
    <div className="admin-container">
      <div className="admin-sidebar">
        <h2>Admin Panel</h2>
        <ul>
        <li><Link to="/users">User Management</Link></li>
    <li><Link to="/contacts">Contact Management</Link></li>
    <li><Link to="/pAnime">Popular Anime</Link></li>
        </ul>
      </div>
      <div className="admin-content">
        {/* Content for user management, contact management, or popular anime goes here */}

       
      </div>
    </div>
    </>
  );
};

export default AdminPage;
