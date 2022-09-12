import React, { useState } from "react";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import auth from "firebase/compat/auth";

const RegisterContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  width: 50rem;

  .form-group {
    display: flex;
    flex: 0 0 auto;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 0;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  h1 {
    font-weight: 900;
    color: #b49c73;
    text-align: center;
  }
  .btn-primary {
    margin-top: 2rem;
    color: white;
    background: #b49c73;
    border: none;
    padding: 10px;
    &:hover {
      background: #b49c73;
    }
  }
  .message {
    font-weight: 900;
    color: green;
    padding: 1rem 1rem 1rem 0;
  }
`;

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const registerNewUser = (e) => {
    e.preventDefault();
    console.log(email, password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        window.location.href = "/";
        console.log(res);
      })
      .catch((error) => {
        setMessage(error);
      });
  };
  return (
    <RegisterContainer>
      <div className="container">
        <h1>Join Us</h1>
        <span className="message">{message}</span>
        <form onSubmit={registerNewUser} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="authorname">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </RegisterContainer>
  );
};

export default Register;
