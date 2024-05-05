import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ImageModal({ OnOpen, selectedImage, onClose }) {
  return (
    <Modal
      isOpen={OnOpen}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={onClose}
    >
      {selectedImage && (
        <img
          className={css.image}
          src={selectedImage}
          alt={selectedImage.alt_description}
        />
      )}
    </Modal>
  );
}
