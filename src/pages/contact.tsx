import React, { Component } from "react";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [c_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e: any) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/contact/add", Contact)
      .then((res) => console.log(res.data));
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h3>Contact Us</h3>
        <hr></hr>{" "}
        <form onSubmit={handleSubmit}>
          <div className="textboxfrm">
            <input
              type="text"
              value={c_name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="textboxfrm">
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="textboxfrm">
            <input
              type="text"
              value={mobileNumber}
              placeholder="Mobile Number"
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div className="textboxfrm">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <div className="message">{message ? <p>{message}</p> : null}</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
