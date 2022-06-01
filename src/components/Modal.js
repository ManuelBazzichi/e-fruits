import React from "react";
import Logo from "../assets/logo.png";
import { useFetchData } from "../Hooks/useFetchData";
import "./Modal.css";
import { Button, Modal } from "react-bootstrap";

const Detail = ({ data, handleClose }) => {
  return (
      <Modal.Dialog className="position-fixed">
        <Modal.Header>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{data.price}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={() => handleClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
  );

  // return (
  //     <div className="position-fixed">
  //       <div
  //         className="modal fade"
  //         tabIndex="-1"
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
