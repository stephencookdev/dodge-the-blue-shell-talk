import React from "react";
import styles from "./styles.scss";

export default () => (
  <div className={styles.customFonts}>
    <span>a</span> <span>b</span> <span>c</span>
    <span>a</span> <span>b</span> <span>c</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 5">
      <g style={{ stroke: "currentColor" }} transform="translate(0 -292)">
        <circle
          cx="3.1"
          cy="293.9"
          r="1.7"
          fill="none"
          strokeLinejoin="round"
          strokeWidth=".3"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeWidth=".3"
          d="M1.9 295.2l-1.6 1.6"
        />
      </g>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 5">
      <g
        style={{ stroke: "currentColor" }}
        fill="none"
        strokeLinejoin="round"
        strokeWidth=".3"
        transform="translate(0 -292)"
      >
        <circle cx="2.4" cy="292.92" r=".75" strokeLinecap="round" />
        <path d="M1 297a1.4 2.7 0 0 1 1.5-2.7 1.4 2.7 0 0 1 1.4 2.7" />
      </g>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 5">
      <path fill="none" stroke="none" d="M.1.7h4.8v3.5H.1z" />
      <g
        fill="none"
        strokeLinecap="round"
        strokeWidth=".3"
        style={{
          stroke: "currentColor",
          transform: "translateX(0.2px) scaleX(0.91)"
        }}
      >
        <path strokeLinejoin="round" d="M2.5 2.4L.1.7v3.6h2.4" />
        <path strokeLinejoin="round" d="M2.5 2.4L5 .7v3.6H2.5" />
        <path d="M.2.7h2.5" />
        <path d="M4.9.7H2.4" />
        <rect
          x="0.15"
          y="0.7"
          width="4.7"
          height="3.6"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  </div>
);
