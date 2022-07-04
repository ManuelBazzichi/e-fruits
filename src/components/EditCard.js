import React, { useEffect, useState } from "react";

const EditCard = (fruit) => {
  const [ediFruit, setEditFruit] = useState({
    genere: fruit.fruit.genus,
    nome: fruit.fruit.name,
    famiglia: fruit.fruit.family,
    calorie: fruit.fruit.nutritions.calories,
    carboidrati: fruit.fruit.nutritions.carbohydrates,
    grassi: fruit.fruit.nutritions.fat,
    proteine: fruit.fruit.nutritions.protein,
    zuccheri: fruit.fruit.nutritions.sugar,
    prezzo: fruit.fruit.price,
  });

  useEffect(() => {
    console.log(fruit);
  }, []);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setAddFruit({
  //     ...addFruit,
  //     [name]: value,
  //   });
  // };

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
            value={ediFruit.genere}
          ></input>
        </div>

        <div className="d-flex justify-content-between mt-1">
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            type="text"
            name="nome"
            value={ediFruit.nome}
          ></input>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <label htmlFor="famiglia">Famiglia:</label>
          <input
            id="famiglia"
            type="text"
            name="famiglia"
            value={ediFruit.famiglia}
          ></input>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <label htmlFor="calorie">Calorie:</label>
          <input
            id="calorie"
            type="text"
            name="calorie"
            value={ediFruit.calorie}
          ></input>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <label htmlFor="carboidrati">Carboidrati:</label>
          <input
            id="carboidrati"
            type="text"
            name="carboidrati"
            value={ediFruit.carboidrati}
          ></input>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <label htmlFor="grassi">Grassi:</label>
          <input
            id="grassi"
            type="text"
            name="grassi"
            value={ediFruit.grassi}
          ></input>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <label htmlFor="proteine">Proteine:</label>
          <input
            id="proteine"
            type="text"
            name="proteine"
            value={ediFruit.proteine}
          ></input>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <label htmlFor="zuccheri">Zuccheri:</label>
          <input
            id="zuccheri"
            type="text"
            name="zuccheri"
            value={ediFruit.zuccheri}
          ></input>
        </div>
        <div className="d-flex justify-content-between mt-1 ">
          <label htmlFor="prezzo">Prezzo:</label>
          <input
            id="prezzo"
            type="text"
            name="prezzo"
            value={ediFruit.prezzo}
          ></input>
        </div>
        <button className="text-center" type="submit">
          Modifica
        </button>
      </form>
    </div>
  );
};

export default EditCard;
