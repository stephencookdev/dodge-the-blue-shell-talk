import React from "react";
import { Code, Step } from "react-presents";
import classNames from "classnames";
import CustomSlide from "../misc/CustomSlide";
import HighlightList from "../misc/HighlightList";
import hooray from "../images/hooray.gif";
import styles from "./common.scss";

const cssVariables = `:root {
  --my-color: #fff;
}

.my-class {
  color: var(--my-color);
}`;

export default () => (
  <CustomSlide title={true}>
    <Step index={0} exact>
      <h1>Icons as SVG</h1>
    </Step>
    <Step index={1}>
      <h1>Icons as SVG</h1>

      <div className={styles.sidebyside}>
        <HighlightList
          items={[
            {
              text: (
                <div>
                  SVGO (
                  <a
                    href="https://jakearchibald.github.io/svgomg/"
                    className={styles.creditAuthor}
                  >
                    SVGOMG
                  </a>{" "}
                  by{" "}
                  <a
                    href="https://twitter.com/jaffathecake"
                    className={styles.creditAuthor}
                  >
                    @jaffathecake
                  </a>
                  )
                </div>
              ),
              count: 1
            },
            "Image size",
            "Accessible out of the box",
            "Fail to load gracefully",
            "Dynamic colour",
            { text: "Non-trivial icon variants", count: 2 }
          ]}
          offset={1}
        />

        <div className={styles.asideImgHolder}>
          <Step index={3} exact>
            <div className={styles.svgWithText}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 5.2 5.2"
                class="like"
              >
                <path
                  fill="var(--primary-color-alt)"
                  stroke="var(--primary-color-alt)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width=".3"
                  d="M2.6.3L3.4 2H5L3.7 3.2 4.3 5 2.6 4M2.6.3L1.8 2H.2l1.3 1.2L.9 5l1.7-1"
                />
              </svg>
              2.9Kb vs. 0.2Kb
            </div>
          </Step>
          <Step index={7} exact>
            <Code value={cssVariables} codeMirrorOptions={{ mode: "css" }} />
          </Step>
          <Step index={8} exact>
            <img src={hooray} alt={'Codex from The Guild saying "Yay!"'} />}
          </Step>
        </div>
      </div>
    </Step>
  </CustomSlide>
);
