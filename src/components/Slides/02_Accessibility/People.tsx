import React, { type FC } from "react"

import { Slide } from "../../RevealComponents/Slide"

export const AccessibilityPeople: FC = () => (
  <Slide>
    <div
      style={{
        paddingLeft: "4rem",
        paddingRight: "4rem",
        height: "100vh",
        display: "grid",
        gridTemplateRows: "1fr 3fr",
      }}
    >
      <div style={{ display: "inline-grid", alignItems: "center" }}>
        <h2>Accessiblity is about people</h2>
      </div>

      <div
        style={{
          display: "inline-grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          columnGap: "4rem",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "inline-grid",
            gridTemplateRows: "1fr 1fr",
            rowGap: "1rem",
          }}
        >
          <div style={{ backgroundColor: "black" }} />
          <p style={{ fontSize: "1.75rem" }}>
            Technology is a critical way people interact with the world and this
            is no different for people with disabilities.
          </p>
        </div>
        <div style={{ backgroundColor: "black", marginBottom: "4px" }} />
        <div
          style={{
            display: "inline-grid",
            gridTemplateRows: "auto 4fr 1fr",
            rowGap: "1rem",
          }}
        >
          <p style={{ fontSize: "1.75rem" }}>
            When we fail to write accessible code or design accessible user
            flows, we are excluding people.
          </p>
          <div style={{ backgroundColor: "black" }} />
          <div />
        </div>
      </div>
    </div>
  </Slide>
)
