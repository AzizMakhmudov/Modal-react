import React, { useRef } from "react";

export default function ModalRef() {
  const modalRef = useRef(null);
  function openModal() {
    modalRef.current.style.display = "block";
  }

  function closeModal() {
    modalRef.current.style.display = "none";
  }

  return <div>
    <button onClick={openModal} className="modal-open__ref" >Open Modal useRef</button>
    <div ref={modalRef} className="modalRefDiv">
      <div className="modal-content">
        <button onClick={closeModal}>Close Modal</button>
        <p>Modal Content</p>
      </div>
    </div>
  </div>;
}