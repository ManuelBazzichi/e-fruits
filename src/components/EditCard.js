import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const EditCard = ({ fruit, handleShowEditFruit }) => {
  const [editFruit, setEditFruit] = useState({
    genere: fruit.genus,
    nome: fruit.name,
    famiglia: fruit.family,
    calorie: fruit.nutritions.calories,
    carboidrati: fruit.nutritions.carbohydrates,
    grassi: fruit.nutritions.fat,
    proteine: fruit.nutritions.protein,
    zuccheri: fruit.nutritions.sugar,
    prezzo: fruit.price,
  });

  useEffect(() => {
    console.log(fruit);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFruit({
      ...editFruit,
      [name]: value,
    });
  };

  return (
    <div>
      <form className="center top-50 left-50 text-center position-fixed p-5 bg-white w-50">
        <h3 className="mb-4">Modifica frutto:</h3>
        <div className="d-flex justify-content-between mt-1">
          <label htmlFor="genere">Genere:</label>
          <input
            id="genere"
            type="text"
            name="genere"
            value={editFruit.genere}
            onChange={handleChange}
          ></input>
        </div>

        <div className="d-flex justify-content-between mt-1">
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            type="text"
            name="nome"
            onChange={handleChange}
            value={editFruit.nome}
          ></input>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <label htmlFor="famiglia">Famiglia:</label>
          <input
            id="famiglia"
            type="text"
            name="famiglia"
            onChange={handleChange}
            value={editFruit.famiglia}
          ></input>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <label htmlFor="calorie">Calorie:</label>
          <input
            id="calorie"
            type="text"
            name="calorie"
            onChange={handleChange}
            value={editFruit.calorie}
          ></input>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <label htmlFor="carboidrati">Carboidrati:</label>
          <input
            id="carboidrati"
            type="text"
            name="carboidrati"
            onChange={handleChange}
            value={editFruit.carboidrati}
          ></input>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <label htmlFor="grassi">Grassi:</label>
          <input
            id="grassi"
            type="text"
            name="grassi"
            onChange={handleChange}
            value={editFruit.grassi}
          ></input>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <label htmlFor="proteine">Proteine:</label>
          <input
            id="proteine"
            type="text"
            name="proteine"
            onChange={handleChange}
            value={editFruit.proteine}
          ></input>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <label htmlFor="zuccheri">Zuccheri:</label>
          <input
            id="zuccheri"
            type="text"
            name="zuccheri"
            onChange={handleChange}
            value={editFruit.zuccheri}
          ></input>
        </div>
        <div className="d-flex justify-content-between mt-1 ">
          <label htmlFor="prezzo">Prezzo:</label>
          <input
            id="prezzo"
            type="text"
            name="prezzo"
            onChange={handleChange}
            value={editFruit.prezzo}
          ></input>
        </div>
        <hr></hr>
        <Button className="text-center m-2 shadow" type="submit">
          Modifica
        </Button>
        <Button
          className="text-center m-2 shadow"
          onClick={handleShowEditFruit}
        >
          Annulla
        </Button>
      </form>
    </div>
  );
};

export default EditCard;
