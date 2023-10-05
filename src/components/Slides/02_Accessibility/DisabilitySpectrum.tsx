import React, { type FC } from "react"

import { Slide } from "../../RevealComponents/Slide"

export const AccessibilityDisabilitySpectrum: FC = () => (
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
      <h2 className="visually-hidden">Disability is a spectrum</h2>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          columnGap: "4rem",
          fontWeight: "bold",
          fontSize: "4rem",
          margin: "0px",
          maxWidth: "unset",
        }}
      >
        <li style={{ paddingBottom: "0px", lineHeight: "unset" }}>Permanent</li>
        <hr />
        <li style={{ paddingBottom: "0px", lineHeight: "unset" }}>Temporary</li>
        <hr />
        <li style={{ paddingBottom: "0px", lineHeight: "unset" }}>
          Situational
        </li>
      </ul>
    </div>
  </Slide>
)
