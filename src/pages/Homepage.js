import React, { useState } from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { CardShared } from "../components/CardShared";
import Modal from "../components/Modal";


const Homepage = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(true);
  const handleShow = () => setShow(false);

  return (
    <div >
      <Navbar />
      <CardShared handleShow={handleShow} />
      <Modal show={show} handleShow={handleShow} handleClose={handleClose}/>
      <Footer />
    </div>
  );
};

export default Homepage;
