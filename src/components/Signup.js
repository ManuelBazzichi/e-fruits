import React from "react";
import { register } from "../state/userSlice";
import { useDispatch } from "react-redux";
import "./Signup.css";

const Signup = () => {
  const dispatch = useDispatch();
  const handlerSubmit = (e) => {
    e.preventDefault();

    // const name = e.target.nome.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    dispatch(register({ email, password }));
  };
  return (
    <div className="container">
      <form onSubmit={handlerSubmit}>
        {/* <input name="nome" type="text" /> */}

        <div className="form-signin">
          <h2 className="form-signin-heading">Login</h2>
          <label htmlFor="email">Email:</label>
          <input className="form-control" name="email" type="email" />
        </div>

        <div className="form-signin">
          <label htmlFor="password">Password:</label>
          <input className="form-control" name="password" type="password" />
        </div>
        <div className="button">
          <button className="button-style" type="submit">
            Invia
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
