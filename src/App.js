import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import TopNav from "./TopNav";
import Settings from "./Settings";
import Palette from "./Palette";
import types from "./types.js";

function App() {
  const [hex, changeHex] = useState("#5f42ad");
  const [variation, changeVariation] = useState("analogous");

  const defaultSettings = {
    lighten: {type: types.simpleSetting, value: 0},
    brightness: {type: types.complexSetting, value: 100},
    saturation: {type: types.complexSetting, value: 100}
  }
  const [settings, setSettings] = useState(defaultSettings)

  return (
    <div className="App">
      <TopNav {...{changeVariation, changeHex}}/>
      <Container fluid={true}>
        <Row>
          <Col xs={3}>
            <Settings {...{settings, setSettings, defaultSettings}} />
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
