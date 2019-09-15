import React from "react";
import CustomSlide from "../misc/CustomSlide";
import styles from "./common.scss";

export default () => (
  <CustomSlide title={true}>
    <h1>SVGs So Good</h1>
    <h2 className={styles.subtitle}>You dodge the Blue Shell</h2>
  </CustomSlide>
);
