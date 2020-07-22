import React from "react";
import Colors from "./Colors";
import "./Palette.css";

const tinycolor = require("tinycolor2");

export default function Palette({ hex, variation, setting, settingValue }) {
  let colors;
  // Using a switch to set variation type set
  switch (variation) {
    case "tetrad":
      colors = tinycolor(hex).tetrad();
      break;
    case "analogous":
      colors = tinycolor(hex).analogous();
      break;
    case "monochromatic":
      colors = tinycolor(hex).monochromatic();
      break;
    case "splitcomplement":
      colors = tinycolor(hex).splitcomplement();
      break;
    case "triad":
      colors = tinycolor(hex).triad();
      break;
    case "tetrad":
      colors = tinycolor(hex).tetrad();
      break;
    case "complement":
      colors = tinycolor(hex).complement().toHexString();
      break;
  }

  // Using a dictionary object to set setting
  const settings = color => {
    const converter = {
      lighten: tinycolor(color).lighten(settingValue).toString(),
      brighten: tinycolor(color).brighten(settingValue).toString(),
      darken: tinycolor(color).darken(settingValue).toString(),
      desaturate: tinycolor(color).desaturate(settingValue).toString(),
      saturate: tinycolor(color).saturate(settingValue).toString(),
      greyscale: tinycolor(color).greyscale(settingValue).toString(),
      default: color
    };

    return converter[setting];
  };

  if (!Array.isArray(colors)) {
    return <Colors hex={colors} />;
  }
  
  const colorPalette = colors.map(color => {
    let hexColor = settings(color.toHexString());
    return <Colors hex={hexColor} />;
  });

  return <div id="container">{colorPalette}</div>;
}
