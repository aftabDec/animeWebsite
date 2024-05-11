import "./register.css";
import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useAuth } from "../store/store";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Login() {
  const [user, setUser] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword: "",
  });


  const navigate = useNavigate()

  const {storeTokenInLS} = useAuth()

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Form submitted:", user); // Log the form data to the console
    if (user.password !== user.confirmPassword) {
      toast.error('Passwords do not match');
      // Display an error message or highlight the confirm password field
      console.error('Passwords do not match');
      return;
     
  }
    try {
      try {
        const response = await fetch(`http://localhost:3000/api/kitsune/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        });
        const data = await response.json();
        console.log("res from server", data.details);
        if (response.ok) {
         
          
           storeTokenInLS(data.token);
            // localStorage.setItem("token",data)

            toast.success(data.details? data.details : data.message);
          // Redirect after storing the token
          navigate("/login");
        }
        else{
          toast.error(data.details? data.details : data.message);
        }
      } catch (error) {
        console.error("register error", error);
      }
      
    } catch (error) {
      console.log("register error",error)
    }
  };
  
  return (
    <div className="canvas show3">
      <div className="loginContent">
        <h2>Register Here</h2>
        <div className="cross">
          {/* Cross icon */}
          <Link to="/"><RiCloseLine /></Link>
        </div>
        <form onSubmit={handleSubmit}> {/* Add onSubmit event handler */}
          <div className="loginPage">
            {/* username input */}
            <label htmlFor="name">Name:</label>
            <input
              name="username"
              type="text"
              id="name"
              value={user.username}
              onChange={handleInput}
              placeholder="Enter username"
              required
            />
            {/* Email input */}
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="email"
              id="email"
              value={user.email}
              onChange={handleInput}
              placeholder="Enter Email"
              required
            />
            {/* Password input */}
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              type="password"
              id="password"
              value={user.password}
              onChange={handleInput}
              autoComplete="off"
              placeholder="Enter Password (min 8, max 30 characters)"
              required
            />
            {/* Confirm Password input */}
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              name="confirmPassword"
              type="password"
              id="confirm-password"
              value={user.confirmPassword}
              onChange={handleInput}
              placeholder="Confirm Password"
              required
            />
            {/* Submit button */}
            <button type="submit" className="sub">
              Register
            </button>
            {/* Forgot password link */}
            <div className="forgot-login">
              <p>
                <a className="forgot" href="#">Forgot password?</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
