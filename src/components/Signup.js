import React from "react";
import { register } from "../state/userSlice";
import { useDispatch } from "react-redux";
import "./Signup.css";

const Signup = ({ login }) => {
  const dispatch = useDispatch();
  const handlerSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    dispatch(register({ email, password, name }));
  };
  return (
    <div className="container-form">
      <form onSubmit={handlerSubmit}>
        <div className="container-x">
          <button className="x" onClick={() => login(false)}>
            X
          </button>
        </div>

        <h3 className="Title">Login</h3>

        <div className="form-signin">
          <label htmlFor="name">Name:</label>
          <input className="form-control" name="name" type="text" />
        </div>
        <div className="form-signin">
          <label htmlFor="email">Email:</label>
          <input className="form-control" name="email" type="email" />
        </div>

        <div className="form-signin">
          <label htmlFor="password">Password:</label>
          <input className="form-control" name="password" type="password" />
        </div>
        <div className="button">
          <button className="submit-button" type="submit">
            Invia
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
