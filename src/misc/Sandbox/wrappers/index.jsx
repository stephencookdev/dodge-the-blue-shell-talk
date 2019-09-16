import React from "react";
import styles from "../styles.scss";
import main from "../main.html";

const transformHtml = html =>
  html.replace(
    /class="([^"]+)"/g,
    (_, cs) =>
      `class="${cs
        .split(" ")
        .map(c => styles[c])
        .join(" ")}"`
  );

export default () => (
  <div dangerouslySetInnerHTML={{ __html: transformHtml(main) }} />
);
