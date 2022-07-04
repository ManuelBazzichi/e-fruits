import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardShared from "../components/CardShared";
import { useFetchData } from "../Hooks/useFetchData";
import Detail from "../components/Modal";
import { CartContext } from "../App";
import ModalCart from "../components/ModalCart";
import AddCardToTheShop from "../components/AddCardToTheShop";
import EditCard from "../components/EditCard";

const Homepage = () => {
  const [show, setShow] = useState(true);
  const [showAddFruit, setShowAddFruit] = useState(false);
  const [showEditFruit, setShowEditFruit] = useState(false);
  const [showCart, setShowCart] = useState(true);
  const [data, load, error] = useFetchData();
  const [fruit, setFruit] = useState();
  const { cart } = useContext(CartContext);

  const handleShowAddFruit = () => {
    setShowAddFruit(!showAddFruit);
  };
  const handleShowEditFruit = (fruit) => {
    setFruit(fruit);

    setShowEditFruit(!showEditFruit);
  };

  const handleClose = () => setShow(true);
  const handleCloseCart = () => setShowCart(true);
  const handleShowCart = () => {
    setShow(true);
    setShowCart(false);
  };

  const handleShow = (fruit) => {
    setShowCart(true);
    setShow(false);
    setFruit(fruit);
  };
  return (
    <div>
      <Navbar
        cartItemsNumber={cart.length}
        handleShow={handleShowCart}
        handleShowAddFruit={handleShowAddFruit}
      />
      <CardShared
        data={data}
        load={load}
        error={error}
        handleShow={handleShow}
        handleShowEditFruit={handleShowEditFruit}
      />
      {!show && (
        <Detail
          data={fruit}
          handleShow={handleShow}
          handleClose={handleClose}
        />
      )}
      {showAddFruit && (
        <AddCardToTheShop
          data={fruit}
          handleShowAddFruit={handleShowAddFruit}
        />
      )}
      {showEditFruit && (
        <EditCard
          data={data}
          fruit={fruit}
          handleShowEditFruit={handleShowEditFruit}
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
