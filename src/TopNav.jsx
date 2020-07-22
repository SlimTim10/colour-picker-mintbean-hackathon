import React from "react";
import { Navbar, Form, Nav, FormControl, NavDropdown } from "react-bootstrap";

const tinycolor = require("tinycolor2");

export default function TopNav({
  changeHex,
  changeVariation
}) {
  const handleHexChange = e => {
    e.preventDefault();
    changeHex(e.target.value);
  };

  const handleVariationChange = variation => {
    changeVariation(variation);
  };

  const setRandom = () => {
    const randomColor = tinycolor.random().toHexString();
    changeHex(randomColor);
  };

  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand>Color Palette Generator</Navbar.Brand>
            <NavDropdown
              onSelect={e => handleVariationChange(e)}
              title="Variation"
              id="variation"
            >
              <NavDropdown.Item eventKey="analogous">
                Analogous
              </NavDropdown.Item>
              
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="monochromatic">
                Monochromatic
              </NavDropdown.Item>
              
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="complement">
                Complement
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="splitcomplement">
                Split Complement
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="triad">Triad</NavDropdown.Item>
              <NavDropdown.Item eventKey="tetrad">Tetrad</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown.Divider />

          </Navbar.Collapse>
        </Nav>
        <Nav.Link id="random" onClick={() => setRandom()}>
          Random
        </Nav.Link>
        <Form onChange={e => handleHexChange(e)} inline>
          <FormControl type="text" placeholder="#77d36a" className="mr-sm-2" />
        </Form>
      </Navbar>
    </div>
  );
}
