import React from "react";
import Logo from "../assets/logo.png";
import "./Modal.css"

export default function Modal(props) {

  return (
    <div>

      <div
        className={props.show ? "modal" : undefined}
        role="dialog"
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="d-flex">
              <div className="flex-grow-1 modal-img">
                <img src={Logo} width={250} height={250} alt="Fruit" />
              </div>
              <div className="p-4 flex-grow-1">
                <h5 class="modal-title">Modal title</h5>
                <p>
                  This is some content from a media component. You can replace
                  this with any content and adjust it as needed.
                </p>
              </div>
              <div className="flex-grow-0">
                <button
                  onClick={props.handleClose}
                  type="button"
                  className="close"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <div className="p-2 modal-price  ">
              <p className="fw-semibold">Price ...</p>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-secondary button-style-red"
                onClick={props.handleClose}
              >
                Chiudi
              </button>
              <button type="button" className="btn btn-primary button-style">
                Acquista
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
