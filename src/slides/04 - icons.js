import React from "react";
import { Step } from "react-presents";
import classNames from "classnames";
import CustomSlide from "../misc/CustomSlide";
import HighlightList from "../misc/HighlightList";
import SarahAmazingSvg from "../misc/SarahAmazingSvg";
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
    <Step index={1}>
      <h1>The Humble Icon</h1>
      <div className={styles.sidebyside}>
        <HighlightList
          items={["Icons and logos", "Cool animations rare in production"]}
          offset={1}
        />

        <div className={styles.asideImgHolder}>
          <Step index={2} exact>
            <img
              src={twitterList}
              alt="A printscreen of the sidebar on Twitter, containing an example of icons"
            />
          </Step>
          <Step index={3} exact>
            <img src={businessCat} alt="A cat being very business-like" />
          </Step>
        </div>
      </div>
    </Step>
  </CustomSlide>
);
