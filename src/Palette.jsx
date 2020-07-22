import React, { useEffect } from "react";
import Color from "./Color";
import "./Palette.css";

const tinycolor = require("tinycolor2");

export default function Palette({ settings, hex, variation }) {
  useEffect(() => {
    applySettings(tinycolor(hex))
  }, [settings])
  
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

  if (!Array.isArray(colors)) {
    return <Color hex={colors} />;
  }
  
  const applySetting = (color, [name, percent]) => (
    name === 'lighten' ? color.lighten(percent)
      : name === 'brighten' ? color.brighten(percent)
      : name === 'darken' ? color.darken(percent)
      : name === 'saturate' ? color.saturate(percent)
      : name === 'desaturate' ? color.desaturate(percent)
      : color
  );
  
  const applySettings = color => (
    Object.entries(settings)
      .reduce(applySetting, color)
      .toHexString()
  );

  const colorPalette = colors.map(color => {
    const hex = applySettings(color);
    return <Color hex={hex} />;
  });

  return <div id="container">{colorPalette}</div>;
}
