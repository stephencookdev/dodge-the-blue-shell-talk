import React from "react";
import { Step } from "react-presents";
import classNames from "classnames";
import CustomSlide from "../misc/CustomSlide";
import HighlightList from "../misc/HighlightList";
import styles from "./common.scss";

export default () => (
  <CustomSlide title={true}>
    <h1>Animations</h1>
    <HighlightList
      items={["Basic CSS animations", "Complex GSAP animations"]}
    />
  </CustomSlide>
);
