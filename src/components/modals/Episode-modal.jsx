import React, {useEffect, useState} from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "25px",
    border: "none",
    boxShadow: "0px -1px 10px 0px rgba(0,0,0,0.55)",
  },
};

Modal.setAppElement(document.getElementById("root"));

const EpisodeModal = ({isEpisodeModalOpen, setEpisodeModalOpen}) => {
  const closeModal = () => {
    setEpisodeModalOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={isEpisodeModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </>
  );
};

export default EpisodeModal;
