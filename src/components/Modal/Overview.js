import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ModalOverview = ({ modalIsOpen, handleCloseModal }) => {
  const { closeModal } = useContext(GlobalContext);
  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      contentLabel="Modal movie description"
    >
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
    </Modal>
  );
};

export default ModalOverview;
