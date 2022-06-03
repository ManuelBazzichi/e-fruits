import React, { useContext } from "react";
import "./Modal.css";
import { Modal } from "react-bootstrap";
import { CartContext } from "../App";
import Trash from "../assets/trash.png";
import "./ModalCart.css";

const ModalCart = ({ data, handleClose }) => {
  const { cart, onRemove } = useContext(CartContext);
  return (
    <Modal.Dialog className="position-fixed">
      {cart.map((el, i) => (
        <div key={i} className="d-flex ">
          <div className="flex-grow-1">
            <img className="modal-img" src={el.image} width={90} alt="Fruit" />
          </div>
          <div className="d-flex justify-content-start flex-grow-1 modal-info">
            <h5 className="modal-title mt-2 text-left">{el.name}</h5>
          </div>
          <div className="d-flex  p-2 modal-price">
            <p className="fw-semibold fw-bold fs-5 mt-4">$ {el.price}</p>
          </div>
          <div className="flex-grow-1 p-2 d-flex justify-content-end d-flex align-items-center">
            <img
              className="modal-button fw-semibold fw-bold fs-2 border-0 bg"
              onClick={() => onRemove(el.id)}
              width={24}
              alt="trash"
              src={Trash}
            />
          </div>
        </div>
      ))}

      <div className="modal-footer d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-secondary button-style-red"
          onClick={() => handleClose()}
        >
          Chiudi
        </button>
      </div>
    </Modal.Dialog>
  );
};

export default ModalCart;
