import React from "react";
// import Logo from "../assets/logo.png";
// import { useFetchData } from "../Hooks/useFetchData";
import "./Modal.css";
import { Button, Modal } from "react-bootstrap";


const Detail = ({ data, handleClose }) => {
  return (
    <Modal.Dialog className="position-fixed">
      {/* <Modal.Body> */}
      <div className="d-flex">
        <div className="flex-grow-1 modal-img">
          <img src={data.image} width={250} height={250} alt="Fruit" />
        </div>
        <div className="p-4 flex-grow-1 modal-info">
          <h5 className="modal-title">{data.name}</h5>
          <p>Famiglia: {data.family}</p>
          <p>Carboidrati: {data.nutritions.carbohydrates}</p>
          <p>Proteine: {data.nutritions.protein}</p>
          <p>Grassi: {data.nutritions.fat}</p>
          <p>Calorie: {data.nutritions.calories}</p>
          <p>Zuccheri: {data.nutritions.sugar}</p>
        </div>
        <div className="flex-grow-0">
          <button
            onClick={() => handleClose()}
            type="button"
            className="close"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
      <div className="p-2 modal-price  ">
        <p className="fw-semibold ms-3 fw-bold">$ {data.price}</p>
      </div>
      {/* </Modal.Body> */}

      <div className="modal-footer d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-secondary button-style-red"
          onClick={() => handleClose()}
        >
          Chiudi
        </button>
        <button type="button" className="btn btn-primary">
          Acquista
        </button>
      </div>
    </Modal.Dialog>
  );

  // return (
  //     <div className="position-fixed modal">
  //       <div
  //         className="modal fade"
  //         tabIndex={-1}
  //         role="dialog"
  //         aria-labelledby="exampleModalLabel"
  //       >
  //         <div className="modal-dialog" role="document">
  //           <div className="modal-content">
  //             <div className="d-flex">
  //               <div className="flex-grow-1 modal-img">
  //                 <img src={data.image} width={250} height={250} alt="Fruit" />
  //               </div>
  //               <div className="p-4 flex-grow-1">
  //                 <h5 className="modal-title">{data.name}</h5>
  //                 <p>
  //                   This is some content from a media component. You can replace
  //                   this with any content and adjust it as needed.
  //                 </p>
  //               </div>
  //               <div className="flex-grow-0">
  //                 <button
  //                   onClick={() => handleClose()}
  //                   type="button"
  //                   className="close"
  //                   aria-label="Close"
  //                 >
  //                   <span aria-hidden="true">&times;</span>
  //                 </button>
  //               </div>
  //             </div>
  //             <div className="p-2 modal-price  ">
  //               <p className="fw-semibold">Price ...</p>
  //             </div>
  //             <div className="modal-footer d-flex justify-content-between">
  //               <button
  //                 type="button"
  //                 className="btn btn-secondary button-style-red"
  //                 // onClick={props.handleClose}
  //               >
  //                 Chiudi
  //               </button>
  //               <button type="button" className="btn btn-primary button-style">
  //                 Acquista
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  // );
};

export default Detail;
