import React, { type FC } from "react"

import { VerticalThirdsSlideTemplate } from "../../SlideTemplates/VerticalThirdsSlide"

export const AriaAPG: FC = () => (
  <VerticalThirdsSlideTemplate
    firstColumn={
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="/images/aria-apg.png" alt="" />
      </div>
    }
    secondColumn={
      <div style={{ display: "flex", flexDirection: "column", rowGap: "2rem" }}>
        <h2>ARIA Authoring Practices Guide</h2>
        <p style={{ margin: 0 }}>
          The ARIA Authoring Practices Guide provide documentation and examples
          for common UIs.
        </p>
        <p style={{ margin: 0 }}>It includes:</p>
        <ul>
          <li>Expected keyboard interactions</li>
          <li>Required roles, states, and properties</li>
          <li>Live examples</li>
        </ul>
      </div>
    }
  />
)
