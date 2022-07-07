import "./Signup.css";
import React from "react";
import { useSelector } from "react-redux";
import { logout } from "../state/userSlice";
import { useDispatch } from "react-redux";

function Profile() {
  const dispatch = useDispatch();
  const myUser = useSelector((state) => state.myUserData.userData);
  console.log(myUser);
  return (
    <div className="App">
      <h2> Ciao {myUser[0]?.email} </h2>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default Profile;
