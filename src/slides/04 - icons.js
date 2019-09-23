import React from "react";
import { Step } from "react-presents";
import CustomSlide from "../misc/CustomSlide";
import HighlightList from "../misc/HighlightList";
import SarahAmazingSvg from "../misc/SarahAmazingSvg";
import noFunAllowed from "../images/noFunAllowed.png";
import twitterList from "../images/twitter.png";
import businessCat from "../images/catBusiness.webp";
import styles from "./common.scss";

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
      <div className={styles.asideImgHolder}>
        <img
          src={noFunAllowed}
          alt="Robot installing sign that reads 'No Fun Allowed'"
        />
      </div>
    </Step>
    <Step index={2}>
      <h1>The Humble Icon</h1>
      <div className={styles.sidebyside}>
        <HighlightList
          items={["Icons and logos", "Cool animations rare in production"]}
          offset={2}
        />

        <div className={styles.asideImgHolder}>
          <Step index={3} exact>
            <img
              src={twitterList}
              alt="A printscreen of the sidebar on Twitter, containing an example of icons"
            />
          </Step>
          <Step index={4} exact>
            <img src={businessCat} alt="A cat being very business-like" />
          </Step>
        </div>
      </div>
    </Step>
  </CustomSlide>
);
