import React, { type FC } from "react"

import AriaPhoto from "../../../images/aria-apg.png"
import { VerticalThirdsSlideTemplate } from "../../SlideTemplates/VerticalThirdsSlide"

export const AriaAPG: FC = () => (
  <VerticalThirdsSlideTemplate
    firstColumn={<img src={AriaPhoto} alt="" />}
    secondColumn={
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "2rem",
          height: "100%",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <h2>ARIA Authoring Practices Guide</h2>
        <p style={{ margin: 0 }}>
          The ARIA Authoring Practices Guide provide documentation and examples
          for common UIs.
        </p>
        <div>
          <p>It includes:</p>
          <ul style={{ flexGrow: 1 }}>
            <li>Expected keyboard interactions</li>
            <li>Required roles, states, and properties</li>
            <li>Live examples</li>
          </ul>
        </div>
        <a
          href="https://www.w3.org/WAI/ARIA/apg/"
          target="_blank"
          rel="noreferrer"
        >
          Learn more at the ARIA APG website
        </a>
      </div>
    }
  />
)
