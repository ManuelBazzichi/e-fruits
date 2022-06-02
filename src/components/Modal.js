import React, { useContext } from "react";
import "./Modal.css";
import { Modal } from "react-bootstrap";
import { CartContext } from "../App";

const Detail = ({ data, handleClose }) => {
  const { onAdd } = useContext(CartContext);
  console.log(data);

  return (
    <Modal.Dialog className="position-fixed">
      <div className="d-flex">
        <div className="flex-grow-1">
          <img className="modal-img" src={data.image} alt="Fruit" />
        </div>
        <div className="flex-grow-1 modal-info">
          <button
            onClick={() => handleClose()}
            type="button"
            className="close"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h5 className="modal-title">{data.name}</h5>
          <p>Famiglia: {data.family}</p>
          <p>Carboidrati: {data.nutritions.carbohydrates}</p>
          <p>Proteine: {data.nutritions.protein}</p>
          <p>Grassi: {data.nutritions.fat}</p>
          <p>Calorie: {data.nutritions.calories}</p>
          <p>Zuccheri: {data.nutritions.sugar}</p>
        </div>
        <div className="flex-grow-0"></div>
      </div>
      <div className="p-2 modal-price">
        <p className="fw-semibold ms-4 fw-bold fs-5">$ {data.price}</p>
      </div>

      <div className="modal-footer d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-secondary button-style-red"
          onClick={() => handleClose()}
        >
          Chiudi
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onAdd(data)}
        >
          Acquista
        </button>
      </div>
    </Modal.Dialog>
  );
};

export default Detail;
