import React, { type FC } from "react"

import { Slide } from "../../RevealComponents/Slide"

export const GAAD: FC = () => (
  <Slide>
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          fontStyle: "italic",
          fontFamily: "Playfair Display, Helvetica, sans-serif",
        }}
      >
        Thank you to the GAAD Speakers Fund
      </h2>
      <p>
        Visit{" "}
        <a href="https://gaad.foundation" target="_blank" rel="noreferrer">
          the GAAD website
        </a>{" "}
        to learn more about their work
      </p>
    </div>
  </Slide>
)
