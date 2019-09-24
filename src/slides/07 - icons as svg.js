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
