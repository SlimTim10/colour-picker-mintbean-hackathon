import React from "react";
import {
  Navbar,
  Form,
  Nav,
  FormControl,
  NavDropdown,
  ListGroup,
  Button
} from "react-bootstrap";
import Slider, { Range } from "rc-slider";
import 'rc-slider/assets/index.css';
import types from "./types.js";

const tinycolor = require("tinycolor2");

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

export default function Settings({
  settings,
  setSettings,
  defaultSettings
}) {
  const changeSetting = name => value => {
    setSettings(setting => ({
      ...setting,
      [name]: {
        ...setting[name],
        value
      }
    }))
  };

  const resetSetting = name => e => {
    setSettings(setting => ({
      ...setting,
      [name]: {
        ...setting[name],
        value: defaultSettings[name].value
      }
    }))
  };

  const simpleSliderProps = {min: 0, max: 100, step: 1, startPoint: 0};
  const complexSliderProps = {min: 0, max: 200, step: 1, startPoint: 100};

  const isChanged = (settingName, defaultValue) => settings[settingName].value !== defaultValue;

  const simpleSettingItem = settingName => (
    <ListGroup.Item active={isChanged(settingName, 0)}>
          <div
            className="setting-name"
            >
            {settingName.capitalize()}
          </div>
          <div className="setting-slider">
            <Slider
              value={settings[settingName].value}
              onChange={changeSetting(settingName)}
              {...simpleSliderProps}
              />
          </div>
          <Button
            variant="secondary"
            onClick={resetSetting(settingName)}>
            reset
          </Button>
        </ListGroup.Item>
  );

  const complexSettingItem = settingName => (
    <ListGroup.Item active={isChanged(settingName, 100)}>
          <div
            className="setting-name"
            >
            {settingName.capitalize()}
          </div>
          <div className="setting-slider">
            <Slider
              value={settings[settingName].value}
              onChange={changeSetting(settingName)}
              {...complexSliderProps}
              />
          </div>
          <Button
            variant="secondary"
            onClick={resetSetting(settingName)}>
            reset
          </Button>
        </ListGroup.Item>
  );

  const settingItem = setting => (
    settings[setting].type === types.simpleSetting ? simpleSettingItem(setting)
      : settings[setting].type === types.complexSetting ? complexSettingItem(setting)
      : null
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
