import React from "react";
import { Step } from "react-presents";
import classNames from "classnames";
import CustomSlide from "../misc/CustomSlide";
import styles from "./common.scss";

export default () => (
  <CustomSlide title={true}>
    <Step index={0} exact>
      <h1>Icons as SVG</h1>
      <ul>
        <li>Dynamic colour, yep</li>
        <li>Simple hover events, yep</li>
        <li>Image size, tiny</li>
        <li>Accessible out of the box</li>
        <li>If they fail to load, they fail to load</li>
        <li>Complex states, yep!</li>
      </ul>
    </Step>
  </CustomSlide>
);
