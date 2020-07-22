import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import TopNav from "./TopNav";
import Settings from "./Settings";
import Palette from "./Palette";

function App() {
  const [hex, changeHex] = useState("#5f42ad");
  const [variation, changeVariation] = useState("analogous");

  const defaultSettings = {
    lighten: 0,
    brighten: 0,
    darken: 0,
    saturate: 0,
    desaturate: 0
  }
  const [settings, setSettings] = useState(defaultSettings)

  return (
    <div className="App">
      <TopNav {...{changeVariation, changeHex}}/>
      <Container fluid={true}>
        <Row>
          <Col xs={3}>
            <Settings {...{settings, setSettings}} />
          </Col>
          <Col>
            <Palette {...{settings, variation, hex}}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
