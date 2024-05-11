// ErrorPage.js

import React from "react";
import { Link } from "react-router-dom";
import  "../errorPage/error.css";
const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Sorry page not found</p>
      <p>Oops! It looks like the page you're trying to access doesn't exist. Maybe it was moved or deleted, or you mistyped the URL. Please double-check the URL or go back to the homepage to find what you're looking for.</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default ErrorPage;
