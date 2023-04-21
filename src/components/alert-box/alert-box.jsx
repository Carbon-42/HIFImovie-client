import { useEffect } from "react";
import Modal from "react-bootstrap/Modal";

export const AlertBox = ({ alert, setModalShow, modalShow, setAlert }) => {
  useEffect(() => {
    if (alert) {
      setModalShow(true);
    }
  });

  const clearAlert = () => {
    setModalShow(false);
    setAlert(null);
    if (location.pathname === "/updateprofile") {
      window.location.assign("/profile");
    } else if (location.pathname === "/profile") {
      window.location.assign("/signup");
    } else if (location.pathname === "/signup") {
      window.location.assign("/");
    }
  };

  return (
    <Modal
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalShow}
      onHide={clearAlert}
    >
      <Modal.Header closeButton>
        <Modal.Body
          id="contained-modal-title-vcenter"
          className="text-center fs-4"
        >
          {alert}
        </Modal.Body>
      </Modal.Header>
    </Modal>
  );
};
