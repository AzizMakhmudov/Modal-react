import { useState } from "react";
import "../../index.css";

export default function Modal() {
  const [Modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!Modal);
  };

  return (
    <div>
      <button onClick={toggleModal} className="modal-open">Open Modal</button>
      {Modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <h2>Hello modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
              dignissimos?
            </p>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}