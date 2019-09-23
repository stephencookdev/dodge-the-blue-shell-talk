import React from "react";
import { Route } from "react-router-dom";
import { Presentation, Slide, DropDownNav } from "react-presents";
import CursorHider from "./misc/CursorHider";

const slides = require("./slides/*.js");

export default () => (
  <Presentation disableTheme>
    <CursorHider />

    {Object.keys(slides).map(name => (
      <Slide component={slides[name].default} key={name} />
    ))}
  </Presentation>
);
