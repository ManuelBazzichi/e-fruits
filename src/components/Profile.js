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
    <div className="app">
      <button className="logout-button" onClick={() => dispatch(logout())}>
        Logout
      </button>
      {/* <button> {myUser[0]?.name} </button> */}
    </div>
  );
}

export default Profile;
