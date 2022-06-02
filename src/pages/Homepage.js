import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardShared from "../components/CardShared";
// import Modal from "../components/Modal";
import { useFetchData } from "../Hooks/useFetchData";
import Detail from "../components/Modal";
import { CartContext } from "../App";
import ModalCart from "../components/ModalCart";

const Homepage = () => {
  const [show, setShow] = useState(true);
  const [showCart, setShowCart] = useState(true)
  const [data, load, error] = useFetchData();
  const [fruit, setFruit] = useState();
  const { cart } = useContext(CartContext);

  const handleClose = () => setShow(true);
  const handleCloseCart= () => setShowCart(true);
  const handleShowCart= () => setShowCart(false);

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
      <Navbar cartItemsNumber={cart.length} handleShow={handleShowCart} />
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
      {!showCart && (
        <ModalCart
          data={fruit}
          handleShow={handleShowCart}
          handleClose={handleCloseCart}
        />
      )}
      <Footer />
    </div>
  );
};

export default Homepage;
