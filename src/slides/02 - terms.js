import React from "react";
import { Step } from "react-presents";
import classNames from "classnames";
import CustomSlide from "../misc/CustomSlide";
import hitByBlueShell from "../images/hitByBlueShell.gif";
import styles from "./common.scss";

export default () => (
  <CustomSlide title={true}>
    <Step index={0} exact>
      <h1>SVG</h1>
    </Step>
    <Step index={1} exact>
      <div className={styles.asideImgHolder}>
        <img src={hitByBlueShell} />
      </div>
    </Step>
  </CustomSlide>
);
