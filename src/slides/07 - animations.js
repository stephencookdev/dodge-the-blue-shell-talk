import React from "react";
import { Step } from "react-presents";
import classNames from "classnames";
import CustomSlide from "../misc/CustomSlide";
import styles from "./common.scss";

export default () => (
  <CustomSlide title={true}>
    <Step index={0} exact>
      <h1>Animations</h1>
      <ul>
        <li>Basic CSS animations</li>
        <li>Interactive parts</li>
        <li>Complex SVG animations (GSAP)</li>
      </ul>
    </Step>
  </CustomSlide>
);
