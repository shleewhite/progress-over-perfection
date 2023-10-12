import React, { type FC } from "react"

import { Slide } from "../RevealComponents/Slide"

export const LinkToSlides: FC = () => (
  <Slide>
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          border: "2px solid var(--r-main-color)",
          fontSize: "4rem",
          width: "fit-content",
          padding: "2rem",
          borderRadius: "4rem",
        }}
      >
        Link to slides:{" "}
        <a style={{ fontWeight: "bold" }} href="https://bit.ly/libjs-pop">
          bit.ly/libjs-pop
        </a>
      </p>
    </div>
  </Slide>
)
