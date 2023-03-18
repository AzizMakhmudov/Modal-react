import React from "react";
import ReactDOM from "react-dom/client";
import Modal from "./components/Modal/Modal";
import ModalRef from "./components/ModalRef/ModalRef";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Modal />
    <ModalRef />
  </React.StrictMode>
);