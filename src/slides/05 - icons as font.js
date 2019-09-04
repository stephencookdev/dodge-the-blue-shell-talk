import React from "react";
import { Step } from "react-presents";
import classNames from "classnames";
import CustomSlide from "../misc/CustomSlide";
import styles from "./common.scss";

export default () => (
  <CustomSlide title={true}>
    <Step index={0} exact>
      <h1>Icons as Fonts</h1>
      <ul>
        <li>Dynamic colour etc.</li>
        <li>Hard to make accessible</li>
        <li>If font fails to load, you have issues</li>
        <li>WTF-factor (https://i.imgur.com/Qs0tWH9.gif)</li>
        <li>More complex states</li>
      </ul>
    </Step>
  </CustomSlide>
);
