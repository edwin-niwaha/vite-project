import React, { Component } from "react";
import "../components/style.css";
import axios from "axios";

class SignUp extends React.Component {
  handleChange = (event: any) => {};
  handleSubmit = (event: any) => {};

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h3>Sign Up</h3>
          <hr></hr>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="textboxfrm">
              <label htmlFor="username ">username </label>
              <input
                type="text"
                name="username "
                onChange={this.handleChange}
              />
            </div>
            <div className="textboxfrm">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" onChange={this.handleChange} />
            </div>
            <div className="textboxfrm">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="textboxfrm">
              <button className="btn btn-primary">Register Me</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SignUp;
