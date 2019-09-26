import React from "react";
import { Step } from "react-presents";
import CustomSlide from "../misc/CustomSlide";
import HighlightList from "../misc/HighlightList";
import OneSvg from "../misc/OneSvg";
import CustomFont from "../misc/CustomFont";
import BrokenFont from "../misc/BrokenFont";
import yes from "../images/yes.gif";
import nope from "../images/nope.gif";
import tooClever from "../images/tooClever.gif";
import svgSupport from "../images/svgSupport.png";
import customFontSupport from "../images/customFontSupport.png";
import styles from "./common.scss";

export default () => (
  <CustomSlide title={true}>
    <h1>Icons as Fonts</h1>

    <Step index={0} exact>
      <CustomFont />
    </Step>
    <Step index={1} maxIndex={6}>
      <div className={styles.sidebyside}>
        <HighlightList
          items={[
            "Dynamic colour",
            "Accessibility",
            "Font not loaded",
            "Non-trivial icon variants",
            "WTF-factor"
          ]}
          offset={1}
        />

        <div className={styles.asideImgHolder}>
          <Step index={2} exact>
            <img src={yes} alt="Liz Lemon giving a thumbs up" />
          </Step>
          <Step index={3} exact>
            <img
              src={nope}
              alt={'Liz Lemon saying "Nope. No, hipster nonsense"'}
            />
          </Step>
          <Step index={4} exact>
            <BrokenFont />
          </Step>
          <Step index={5} exact>
            <OneSvg />
          </Step>
          <Step index={6} exact>
            <img
              src={tooClever}
              alt="A baby in a cradle being rocked by a Macgyver'd cradle hooked up to a electric drill"
            />
          </Step>
        </div>
      </div>
    </Step>

    <Step index={7} exact>
      <div className={styles.wideImgHolder}>
        <a href="https://caniuse.com/#feat=svg">
          <img
            src={svgSupport}
            alt="Screenshot of caniuse.com Basic SVG Support"
          />
        </a>
      </div>
    </Step>
    <Step index={8} exact>
      <div className={styles.wideImgHolder}>
        <a href="https://caniuse.com/#feat=fontface">
          <img
            src={customFontSupport}
            alt="Screenshot of caniuse.com @font-face"
          />
        </a>
      </div>
    </Step>
  </CustomSlide>
);
