import React from "react";
import { Step } from "react-presents";
import classNames from "classnames";
import CustomSlide from "../misc/CustomSlide";
import HighlightList from "../misc/HighlightList";
import OneSvg from "../misc/OneSvg";
import DynamicSvg from "../misc/DynamicSvg";
import technically from "../images/technically.webp";
import artifacts from "../images/jpegArtifacts.jpeg";
import styles from "./common.scss";

export default () => (
  <CustomSlide title={true}>
    <Step index={0} exact>
      <a href="#/sandbox" target="_blank" className={styles.demoLink}>
        Super Serious Business Website
      </a>
    </Step>
    <Step index={1}>
      <h1>Icons as Images</h1>

      <div className={styles.sidebyside}>
        <HighlightList
          items={[
            "It works",
            "Hover events fiddly",
            "Image resizing",
            "Dynamic colour not possible"
          ]}
          offset={1}
        />

        <div className={styles.asideImgHolder}>
          <Step index={2} exact>
            <img src={technically} alt={'Laura Bailey pleaing "technically"'} />
          </Step>
          <Step index={3} exact>
            <OneSvg />
          </Step>
          <Step index={4} exact>
            <img
              src={artifacts}
              alt={
                'Gordon Ramsey shouting "there are so many artifacts in this JPEG, Indiana Jones is looking for them"'
              }
            />
          </Step>
          <Step index={5} exact>
            <DynamicSvg />
          </Step>
        </div>
      </div>
    </Step>
  </CustomSlide>
);
