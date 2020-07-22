import React from "react";
import {
  Navbar,
  Form,
  Nav,
  FormControl,
  NavDropdown,
  ListGroup
} from "react-bootstrap";
import Slider, { Range } from "rc-slider";
import 'rc-slider/assets/index.css';

const tinycolor = require("tinycolor2");

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

export default function Settings({
  settings,
  setSettings
}) {
  const changeSetting = name => percent => {
    setSettings(setting => ({
      ...setting,
      [name]: percent
    }))
  }

  const sliderProps = {min: 0, max: 100, step: 1};

  const isActive = settingName => settings[settingName] !== 0

  const settingItem = settingName => (
    <ListGroup.Item active={isActive(settingName)}>
          <div
            className="setting-name"
            onClick={changeSetting(settingName, 20)}
            >
            {settingName.capitalize()}
          </div>
          <div className="setting-slider">
            <Slider value={settings[settingName]} onChange={changeSetting(settingName)} {...sliderProps} />
          </div>
          <div className="setting-percent">
            {settings[settingName]}
          </div>
        </ListGroup.Item>
  );

  const settingItems = Object.keys(settings).map(settingItem)

  return (
    <div>
      <ListGroup>
        {settingItems}
      </ListGroup>
    </div>
  );
}
