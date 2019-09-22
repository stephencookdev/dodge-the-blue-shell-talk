import React from "react";
import { Step } from "react-presents";
import classNames from "classnames";
import CustomSlide from "../misc/CustomSlide";
import HighlightList from "../misc/HighlightList";
import OneSvg from "../misc/OneSvg";
import CustomFont from "../misc/CustomFont";
import BrokenFont from "../misc/BrokenFont";
import yes from "../images/yes.gif";
import nope from "../images/nope.gif";
import tooClever from "../images/tooClever.gif";
import styles from "./common.scss";

export default () => (
  <CustomSlide title={true}>
    <Step index={0} exact>
      <h1>Icons as Fonts</h1>
      <CustomFont />
    </Step>
    <Step index={1}>
      <h1>Icons as Fonts</h1>

      <div className={styles.sidebyside}>
        <HighlightList
          items={[
            "Dynamic colour",
            "Accessibility",
            "Font not loaded",
            "WTF-factor",
            "Non-trivial hover icons"
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
            <img
              src={tooClever}
              alt="A baby in a cradle being rocked by a Macgyver'd cradle hooked up to a electric drill"
            />
          </Step>
          <Step index={6} exact>
            <OneSvg />
          </Step>
        </div>
      </div>
    </Step>
  </CustomSlide>
);
