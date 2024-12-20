import React, { useState } from "react";
import DebtCard from "../components/cards";
import { Button, Modal } from "react-bootstrap";

const Debts = ({ debts }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container p-0">
      <div className="input-group mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Searching..."
        />
        <button
          onClick={handleShow}
          className="btn btn-outline-primary"
          type="button"
        >
          Add debt
        </button>
      </div>
      <div>
        {debts.map((el) => (
          <DebtCard key={el.id} {...el}>
            {el.description}
          </DebtCard>
        ))}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Debts;
