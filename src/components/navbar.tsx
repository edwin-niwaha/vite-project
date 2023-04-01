import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
        <Link to="/" className="navbar-brand">
          Vite - Project
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Create User
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/customer" className="nav-link">
                Add Customer
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/list-customer" className="nav-link">
                List Customers
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
