// Import necessary libraries/components

import { useAuth } from "../store/store";
import React, { useState } from "react";
import "../Reg/login1.css";
import { RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });


   const navigate = useNavigate()
   const {storeTokenInLS} = useAuth()

  const handleInput =  (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted:", user); // Log the form data to the console
   
    try {
      const response = await fetch(`http://localhost:3000/api/kitsune/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });
  
  
  
      // Log the response data
      const data = await response.json();
      console.log("res from server", data.details)
      if (response.ok){
        
        console.log("Login successful:", data)
      
        toast.success(data.details? data.details : data.message);
        storeTokenInLS(data.token);
        // localStorage.setItem("token",data.token)
        navigate("/")
      }
        else{
          toast.error(data.details? data.details : data.message);
      }
      
      
      
      // Handle the response data as needed, such as storing the token in localStorage and redirecting to another page
    } catch (error) {
      console.error("Login error:", error);
      // Handle the error, such as displaying an error message to the user
    }
  };

  return (
    <div className="canvas show3">
      <div className="loginContent">
        <h2>Login Here</h2>
        <div className="cross">
          {/* Cross icon */}
         <Link to="/"> <RiCloseLine /></Link>
        </div>
        <form onSubmit={handleSubmit}> {/* Attach the onSubmit handler */}
          <div className="loginPage">
            {/* Email input */}
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="email"
              id="email"
              onChange={handleInput}
              value={user.email}
              placeholder="Enter Email"
              required
            />
            {/* Password input */}
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              type="password"
              id="password"
              onChange={handleInput}
              value={user.password}
              placeholder="Enter Password (min 8, max 30 characters)"
              required
            />
            {/* Submit button */}
            <button type="submit" className="sub">
              Sign In
            </button>
            {/* Forgot password link */}
            <div className="forgot-login">
              <p>
                <a className="forgot" href="#">Forgot password?</a>
               <Link to='/register'> <a>Register</a></Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
