import React, { Component } from "react";
import { Card, Button, Row, Col, Modal,Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export class UpdateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Modal show={this.props.showFlag} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(event)=>this.props.update(event)} >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' defaultValue={this.props.elementItem.name} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image Url</Form.Label>
                <Form.Control  type="text" name='image' defaultValue={this.props.elementItem.image} />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>PRICE</Form.Label>
                <Form.Control  type="number" name='price' defaultValue={this.props.elementItem.price} />
              </Form.Group>



              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <br />
            <br />
            <Button variant="primary" onClick={this.props.handleClose}>
              close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UpdateModal;
