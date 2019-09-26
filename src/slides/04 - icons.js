import React from "react";
import { Step, Code } from "react-presents";
import CustomSlide from "../misc/CustomSlide";
import HighlightList from "../misc/HighlightList";
import SarahAmazingSvg from "../misc/SarahAmazingSvg";
import noFunAllowed from "../images/noFunAllowed.png";
import twitterList from "../images/twitter.png";
import businessCat from "../images/catBusiness.webp";
import styles from "./common.scss";

const searchSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 5">
  <g
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width=".4"
  >
    <circle cx="3.1" cy="1.9" r="1.7" />
    <path d="M1.9 3.2l-1.6 1.6" />
  </g>
</svg>`;

export default () => (
  <CustomSlide title={true}>
    <Step index={0} exact>
      <h1>SVGs Can Be Stunning</h1>

      <SarahAmazingSvg />
      <a
        href="https://codepen.io/sdras/pen/jEjRwo"
        className={styles.creditAuthor}
      >
        @sarah_edo
      </a>
    </Step>
    <Step index={1} exact>
      <div className={styles.sidebyside}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 5 5"
          style={{ width: "20vw", height: "auto" }}
        >
          <g
            stroke="var(--primary-color-alt)"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth=".4"
          >
            <circle cx="3.1" cy="1.9" r="1.7" />
            <path d="M1.9 3.2l-1.6 1.6" />
          </g>
        </svg>

        <Code
          value={searchSvg}
          codeMirrorOptions={{ mode: "htmlmixed" }}
          highlightLines={[[7, 8]]}
        />
      </div>
    </Step>
    <Step index={2} exact>
      <div className={styles.asideImgHolder}>
        <img
          src={noFunAllowed}
          alt="Robot installing sign that reads 'No Fun Allowed'"
        />
      </div>
    </Step>
    <Step index={3}>
      <h1>The Humble Icon</h1>
      <div className={styles.sidebyside}>
        <HighlightList
          items={["Icons and logos", "Cool animations rare in production"]}
          offset={3}
        />

        <div className={styles.asideImgHolder}>
          <Step index={4} exact>
            <img
              src={twitterList}
              alt="A printscreen of the sidebar on Twitter, containing an example of icons"
            />
          </Step>
          <Step index={5} exact>
            <img src={businessCat} alt="A cat being very business-like" />
          </Step>
        </div>
      </div>
    </Step>
  </CustomSlide>
);
