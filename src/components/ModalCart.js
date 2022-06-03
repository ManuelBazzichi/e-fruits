import React, { useContext } from "react";
import "./Modal.css";
import { Modal } from "react-bootstrap";
import { CartContext } from "../App";
import "./ModalCart.css";

const ModalCart = ({ data, handleClose }) => {
  const { cart, onAdd, onRemove } = useContext(CartContext);
  console.log(data);

  return (
    <Modal.Dialog className="position-fixed">
      <div class="modal-header">
        <h5 class="modal-title">Carrello:</h5>
      </div>
      {cart.length === 0 ? <h5 className="m-3 text-center">Non ci sono prodotti</h5> : cart.map((el, i) => (
        <div key={i} className="d-flex ">
          <div className="flex-grow-1">
            <img
              className="modal-img"
              src={el.image}
              width={90}
              alt="Fruit"
            />
          </div>
          <div className="flex-grow-1 modal-info">
            <h5 className="modal-title mt-2">{el.name}</h5>
          </div>
          <div className="p-2 modal-price">
            <p className="fw-semibold fw-bold fs-5 mt-4">$ {el.price}</p>
          </div>
          {/* <div className="flex-grow-1 p-2 d-flex justify-content-end d-flex align-items-center">
        <p className="fw-semibold fw-bold fs-2">+</p>
        </div> */}
          <div className="flex-grow-1 p-2 d-flex align-ite justify-content-start d-flex align-items-center">
            <button
              className="modal-button fw-semibold fw-bold fs-2 border-0 bg"
              onClick={() => onRemove(el.id)}
            >
              {" "}
              -{" "}
            </button>
          </div>
          {/* <div className="flex-grow-0"></div> */}
        </div>
      ))}

      <div className="modal-footer d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-red btn-secondary button-style-red"
          onClick={() => handleClose()}
        >
          Chiudi
        </button>
        {/* <button
          type="button"
          className="btn btn-primary"
          onClick={() => onAdd(el)}
        >
          Acquista
        </button> */}
      </div>
    </Modal.Dialog>
  );
};

export default ModalCart;
