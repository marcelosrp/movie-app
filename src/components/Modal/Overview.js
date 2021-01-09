import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { GlobalContext } from "../../GlobalContext";

import Modal from "react-modal";

import styled from "styled-components";

const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  color: #22254b;
  cursor: pointer;
  font-size: 24px;
  font-weight: 400;
  position: absolute;
  right: 10px;
  top: 10px;
`;

const Title = styled.h1`
  color: #22254b;
  font-size: 22px;
  line-height: 24px;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: #22254b;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 2px;
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    width: "100%",
    maxWidth: "600px",
    position: "relative",
    padding: "40px 20px",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,.5)",
    padding: "0 15px",
  },
};

Modal.setAppElement("#root");

const ModalOverview = ({ modalIsOpen }) => {
  const { handleCloseModal, modalOverview } = useContext(GlobalContext);
  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      contentLabel="Modal movie description"
    >
      <ButtonClose onClick={handleCloseModal} title="Fechar modal">
        <MdClose />
      </ButtonClose>
      <Title>{modalOverview.title}</Title>
      <Text>{modalOverview.overview}</Text>
    </Modal>
  );
};

export default ModalOverview;
