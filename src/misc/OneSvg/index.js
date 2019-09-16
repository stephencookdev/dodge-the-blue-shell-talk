import React from "react";
import styles from "./styles.scss";

export default () => (
  <div className={styles.oneSvg}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="like"
      viewBox="0 0 5.2 5.2"
      class="like"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".2"
        style={{
          stroke: "var(--primary-dark)",
          fill: "none"
        }}
        d="M2.6.3L3.4 2H5L3.7 3.2 4.3 5 2.6 4M2.6.3L1.8 2H.2l1.3 1.2L.9 5l1.7-1"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="like"
      viewBox="0 0 5.2 5.2"
      class="like"
      style={{
        stroke: "var(--primary-color)",
        fill: "var(--primary-color)"
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".2"
        d="M2.6.3L3.4 2H5L3.7 3.2 4.3 5 2.6 4M2.6.3L1.8 2H.2l1.3 1.2L.9 5l1.7-1"
      />
    </svg>
  </div>
);
