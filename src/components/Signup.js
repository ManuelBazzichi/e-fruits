import React from "react";
import { register } from "../state/userSlice";
import { useDispatch } from "react-redux";
import "./Profile.css";

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
    <div className="FormContainer">
      <form className="FormModal" onSubmit={handlerSubmit}>
        {/* <input name="nome" type="text" /> */}
        <input name="email" type="email" />
        <input name="password" type="password" />
        <button type="submit">Invia</button>
      </form>
    </div>
  );
};

export default Signup;
