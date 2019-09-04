import React from "react";
import { Step } from "react-presents";
import classNames from "classnames";
import CustomSlide from "../misc/CustomSlide";
import styles from "./common.scss";

export default () => (
  <CustomSlide title={true}>
    <Step index={0} exact>
      <h1>Icons</h1>
      <ul>
        <li>Really stunning displays you can do with SVG</li>
        <li>Mostly talking here about the humble icon</li>
      </ul>
    </Step>
  </CustomSlide>
);
