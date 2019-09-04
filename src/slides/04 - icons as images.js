import React from "react";
import { Step } from "react-presents";
import classNames from "classnames";
import CustomSlide from "../misc/CustomSlide";
import styles from "./common.scss";

export default () => (
  <CustomSlide title={true}>
    <Step index={0} exact>
      <h1>Icons as Images</h1>
      <ul>
        <li>It works</li>
        <li>Hover events are a little fiddly</li>
        <li>Image size isn't great</li>
        <li>Dynamic colour isn't possible</li>
      </ul>
    </Step>
  </CustomSlide>
);
