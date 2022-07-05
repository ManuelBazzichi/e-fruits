import React from "react";
import { Button } from "react-bootstrap";

const DeleteCard = ({ fruit, handleShowDeleteFruit }) => {
  return (
    <div className="center d-flex flex-column align-items-center top-50 left-50 text-center position-fixed p-5 bg-white w-50">
      <h2>Confermi di voler eliminare la card {fruit.name}?</h2>
      <img className="w-50 shadow" src={fruit.image}></img>
      <div>
        <hr></hr>

        <Button className="m-2 shadow">Conferma</Button>
        <Button className="m-2 shadow" onClick={handleShowDeleteFruit}>
          Annulla
        </Button>
      </div>
    </div>
  );
};

export default DeleteCard;
