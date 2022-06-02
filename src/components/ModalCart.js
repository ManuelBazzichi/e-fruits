import React, { useContext } from "react";
import "./Modal.css";
import { Modal } from "react-bootstrap";
import { CartContext } from "../App";

const ModalCart = ({ data, handleClose }) => {
  const { onAdd, onRemove } = useContext(CartContext);
  console.log(data);

  return (
    <Modal.Dialog className="position-fixed">
      <div className="d-flex ">
        <div className="flex-grow-1">
          <img className="modal-img" src={data.image} width={90} alt="Fruit" />
        </div>
        <div className="flex-grow-1 modal-info">
         
          <h5 className="modal-title mt-2">{data.name}</h5>
        </div>
        <div className="p-2 modal-price">
          <p className="fw-semibold fw-bold fs-5 mt-4" >$ {data.price}</p>
        </div>
        <div className="flex-grow-1 p-2 d-flex justify-content-end d-flex align-items-center">
        <p className="fw-semibold fw-bold fs-2">+</p>
        </div>
        <div className="flex-grow-1 p-2 d-flex align-ite justify-content-start d-flex align-items-center">
        <p className="fw-semibold fw-bold fs-1 ">-</p>
        </div>
        {/* <div className="flex-grow-0"></div> */}
      </div>

      <div className="modal-footer d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-secondary button-style-red"
          onClick={() => handleClose()}
        >
          Chiudi
        </button>
        {/* <button
          type="button"
          className="btn btn-primary"
          onClick={() => onAdd(data)}
        >
          Acquista
        </button> */}
      </div>
    </Modal.Dialog>
  );
};

export default ModalCart;
