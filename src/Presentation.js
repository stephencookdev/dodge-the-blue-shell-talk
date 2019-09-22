import React from "react";
import { Route } from "react-router-dom";
import {
  Presentation,
  PresenterModePlugin,
  Slide,
  DropDownNav
} from "react-presents";
import CursorHider from "./misc/CursorHider";

const slides = require("./slides/*.js");

export default () => (
  <Presentation disableTheme>
    <PresenterModePlugin />
    <CursorHider />

    {Object.keys(slides).map(name => (
      <Slide component={slides[name].default} key={name} />
    ))}
  </Presentation>
);
