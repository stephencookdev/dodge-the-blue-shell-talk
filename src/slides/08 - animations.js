import React from "react";
import { Step, Code } from "react-presents";
import classNames from "classnames";
import CustomSlide from "../misc/CustomSlide";
import SarahAmazingSvg, { ForwardsBackwards } from "../misc/SarahAmazingSvg";
import HighlightList from "../misc/HighlightList";
import styles from "./common.scss";

const gsap = `const tl = new TimelineMax();

tl.add("start");
tl.staggerFromTo(
  dots,
  1.5,
  { opacity: 0, scale: 0 },
  {
    opacity: 0.6,
    scale: 1.2,
    ease: Elastic.easeOut
  },
  0.05,
  "start"
)`;

const basicCss = `.mySvg .myPath {
  transition: 3s ease opacity;
  opacity: 1;
}

.mySvg:hover .myPath {
  opacity: 0;
}`;

const animationCss = `.mySvg .myPath {
  animation: my-flicker 2s linear infinite;
}

@keyframes my-flicker {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}`;

export default () => (
  <CustomSlide title={true}>
    <h1>Animations</h1>
    <div className={styles.sidebyside}>
      <HighlightList
        items={[
          { text: "Complex GSAP animations", count: 2 },
          { text: "Basic CSS animations", count: 2 }
        ]}
      />
      <div className={styles.asideImgHolder}>
        <Step index={1} exact>
          <Code value={gsap} codeMirrorOptions={{ mode: "javascript" }} />
        </Step>
        <Step index={2} exact>
          <ForwardsBackwards />
        </Step>
        <Step index={3} exact>
          <Code value={basicCss} codeMirrorOptions={{ mode: "css" }} />
        </Step>
        <Step index={4} exact>
          <Code value={animationCss} codeMirrorOptions={{ mode: "css" }} />
        </Step>
      </div>
    </div>
  </CustomSlide>
);
