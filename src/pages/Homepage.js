import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardShared from "../components/CardShared";
// import Modal from "../components/Modal";
import { useFetchData } from "../Hooks/useFetchData";
import Detail from "../components/Modal";
import { CartContext } from "../App";

const Homepage = () => {
  const [show, setShow] = useState(true);
  const [data, load, error] = useFetchData();
  const [fruit, setFruit] = useState();
  const { cart } = useContext(CartContext);

  const handleClose = () => setShow(true);

  const handleShow = (fruit) => {
    console.log(fruit);
    setShow(false);
    setFruit(fruit);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div>
      <Navbar cartItemsNumber={cart.length} />
      <CardShared
        data={data}
        load={load}
        error={error}
        handleShow={handleShow}
      />
      {!show && (
        <Detail
          data={fruit}
          handleShow={handleShow}
          handleClose={handleClose}
        />
      )}
      <Footer />
    </div>
  );
};

export default Homepage;
