import React from "react";
import styles from "./styles.scss";

export default () => (
  <div className={styles.dynamicSvg}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 5">
      <g
        strokeLinejoin="round"
        strokeWidth=".3"
        transform="translate(0 -292)"
        style={{
          stroke: "currentColor",
          fill: "currentColor"
        }}
      >
        <circle cx="2.4" cy="292.92" r=".75" strokeLinecap="round" />
        <path d="M1 297a1.4 2.7 0 0 1 1.5-2.7 1.4 2.7 0 0 1 1.4 2.7" />
      </g>
    </svg>
    Profile
  </div>
);
