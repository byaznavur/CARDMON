import React from "react";
import CostCard from "../components/cards/costcard";
import { Button, Form, Modal } from "react-bootstrap";

const Costs = ({
  costs,
  show,
  handleClose,
  validated,
  handleShow,
  selected,
  submit,
}) => {
  return (
    <div className="container p-0">
      <h2 className="text-center fw-bold">COSTS</h2>
      <div className="input-group my-3">
        <input type="text" className="form-control" placeholder="Searching" />
        <button className="btn btn-outline-primary" onClick={handleShow}>
          Add Cost
        </button>
      </div>

      <div>
        {costs.map((cost, i) => (
          <CostCard key={i} {...cost} />
        ))}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Form noValidate onSubmit={submit} validated={validated}>
          <Modal.Header closeButton>
            <Modal.Title>Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required type="text" />
              <Form.Control.Feedback type="invalid">
                Please fill !
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control required type="number" />
              <Form.Control.Feedback type="invalid">
                Please fill !
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="day">
              <Form.Label>Day</Form.Label>
              <Form.Control required type="date" />
              <Form.Control.Feedback type="invalid">
                Please fill !
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control required as="textarea" />
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
              {selected === null ? "Add" : "Save"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default Costs;
