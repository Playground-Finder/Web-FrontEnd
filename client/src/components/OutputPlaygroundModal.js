import React from "react";
import {
  Card,
  Container,
  ListGroup,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import "../components/styles/outputPlaygroundModal.css";

function OutputPlaygroundModal(props) {
  let sethideAllPlaygroundsModal = props.sethideAllPlaygroundsModal;

  return (
    <div>
      <div
        className="listPlayground-overlay"
        onClick={() => {
          sethideAllPlaygroundsModal(true);
        }}
      ></div>

      <div>
        <Container className="All-Playgrounds-Window">
          <h3> Available Playgrounds for you</h3>

          <Card className="Each-Playground-Card">Hello Card 1</Card>
        </Container>
      </div>
    </div>
  );
}

export default OutputPlaygroundModal;
