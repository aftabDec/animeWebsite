import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../usermanage/allUsers.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Allusers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Fetch the JWT token from localStorage or wherever it's stored
                const token = localStorage.getItem('token');
                // Set the Authorization header with the token
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };
                const response = await axios.get("http://localhost:3000/api/kitsune/Alluser", config);
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users data:', error);
            }
        }
        fetchUsers();
    }, []);
            // Function to delete a user
     const deleteUser = async (id) => {
         try {
            const token = localStorage.getItem("token")
             const config = {
                 headers: {
                  Authorization: `Bearer ${token}`
               }
             };
         const response = await axios.delete(`http://localhost:3000/api/kitsune/alluser/Delete/${id}`, config);
             setUsers(response.data);
               } catch (error) {
                    console.error('Error deleting user:', error);
                }
             }       
    return (
        <>
           
            <div className="Navi">
                <nav>
                    <p><Link>Home</Link></p>
                    <p><Link>Back</Link></p>
                    <p><Link>Users</Link></p>
                    <p><Link>Contacts</Link></p>
                </nav>
            </div>
<form action="" className='forms'>
    <div className="table-container">
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((dataUsers, index) => (
                    <tr key={index}>
                        <td>{dataUsers.username}</td>
                        <td>{dataUsers.email}</td>
                        <td>
                            <button type='button'>Update</button>
                            <button type='button' onClick={() => deleteUser(dataUsers._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</form>
        </>
    );
};

export default Allusers;
