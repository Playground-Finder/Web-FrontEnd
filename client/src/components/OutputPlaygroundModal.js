import React from "react";
import { Card, Container } from "react-bootstrap";
import "../components/styles/outputPlaygroundModal.css";
import FetchData from "./FetchData";

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

      <FetchData />

      <div>
        <Container className="All-Playgrounds-Window">
          <h3> Available Playgrounds for you</h3>

          {/* <Card className="Each-Playground-Card">Hello Card 1</Card> */}
          <Card className="Each-Playground-Card"></Card>
        </Container>
      </div>
    </div>
  );
}

export default OutputPlaygroundModal;
