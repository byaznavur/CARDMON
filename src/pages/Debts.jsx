import React from "react";
import DebtCard from "../components/cards";
import { Button, Form, Modal } from "react-bootstrap";

const Debts = ({
  debt,
  debts,
  show,
  handleClose,
  handleShow,
  validated,
  handleSubmit,
  handleDebt,
}) => {
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
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                onChange={handleDebt}
                value={debt.name}
                type="text"
              />
              <Form.Control.Feedback type="invalid">
                Please fill !
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                required
                onChange={handleDebt}
                value={debt.phone}
                type="text"
              />
              <Form.Control.Feedback type="invalid">
                Please fill !
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="amount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                required
                onChange={handleDebt}
                value={debt.amount}
                type="number"
              />
              <Form.Control.Feedback type="invalid">
                Please fill !
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="dedline">
              <Form.Label>Dedline</Form.Label>
              <Form.Control
                required
                onChange={handleDebt}
                value={debt.dedline}
                type="date"
              />
              <Form.Control.Feedback type="invalid">
                Please fill !
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                onChange={handleDebt}
                value={debt.description}
                as="textarea"
              />
              <Form.Control.Feedback type="invalid">
                Please fill !
              </Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default Debts;
