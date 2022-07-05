import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AddCardToTheShop = ({ handleShowAddFruit }) => {
  //   const [fruits, setFruits] = useState(data);
  const [addFruit, setAddFruit] = useState({
    genere: "",
    nome: "",
    famiglia: "",
    calorie: "",
    carboidrati: "",
    grassi: "",
    proteine: "",
    zuccheri: "",
    prezzo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddFruit({
      ...addFruit,
      [name]: value,
    });
    console.log(addFruit);
  };

  return (
    <form
      className="center top-50 left-50 text-center position-fixed p-5 bg-white w-50"
      onSubmit={handleSubmit}
    >
      <h3 className="mb-4">Aggiungi frutto al negozio:</h3>
      <div className="d-flex justify-content-between mt-1">
        <label htmlFor="genere">Genere:</label>
        <input
          id="genere"
          type="text"
          name="genere"
          value={addFruit.genere}
          onChange={handleChange}
        ></input>
      </div>

      <div className="d-flex justify-content-between mt-1">
        <label htmlFor="nome">Nome:</label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={addFruit.nome}
          onChange={handleChange}
        ></input>
      </div>
      <div className="d-flex justify-content-between mt-1">
        <label htmlFor="famiglia">Famiglia:</label>
        <input
          id="famiglia"
          type="text"
          name="famiglia"
          value={addFruit.famiglia}
          onChange={handleChange}
        ></input>
      </div>
      <div className="d-flex justify-content-between mt-1">
        <label htmlFor="calorie">Calorie:</label>
        <input
          id="calorie"
          type="text"
          name="calorie"
          value={addFruit.calorie}
          onChange={handleChange}
        ></input>
      </div>
      <div className="d-flex justify-content-between mt-1">
        <label htmlFor="carboidrati">Carboidrati:</label>
        <input
          id="carboidrati"
          type="text"
          name="carboidrati"
          value={addFruit.carboidrati}
          onChange={handleChange}
        ></input>
      </div>
      <div className="d-flex justify-content-between mt-1">
        <label htmlFor="grassi">Grassi:</label>
        <input
          id="grassi"
          type="text"
          name="grassi"
          value={addFruit.grassi}
          onChange={handleChange}
        ></input>
      </div>
      <div className="d-flex justify-content-between mt-1">
        <label htmlFor="proteine">Proteine:</label>
        <input
          id="proteine"
          type="text"
          name="proteine"
          value={addFruit.proteine}
          onChange={handleChange}
        ></input>
      </div>
      <div className="d-flex justify-content-between mt-1">
        <label htmlFor="zuccheri">Zuccheri:</label>
        <input
          id="zuccheri"
          type="text"
          name="zuccheri"
          value={addFruit.zuccheri}
          onChange={handleChange}
        ></input>
      </div>
      <div className="d-flex justify-content-between mt-1 ">
        <label htmlFor="prezzo">Prezzo:</label>
        <input
          id="prezzo"
          type="text"
          name="prezzo"
          value={addFruit.prezzo}
          onChange={handleChange}
        ></input>
      </div>
      <hr></hr>
      <Button className="text-center m-2 shadow" type="submit">
        Aggiungi
      </Button>
      <Button className="text-center m-2 shadow" onClick={handleShowAddFruit}>
        Annulla
      </Button>
    </form>
  );
};

export default AddCardToTheShop;
