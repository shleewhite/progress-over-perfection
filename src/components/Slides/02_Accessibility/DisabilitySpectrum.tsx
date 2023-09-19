import React, { type FC } from "react"

import { VerticalThirdsSlideTemplate } from "../../SlideTemplates/VerticalThirdsSlide"

export const AccessibilityDisabilitySpectrum: FC = () => (
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
        <img
          alt="Diagram showing how disability can be situational, temporary, or permanent for disabilities related to sight, hearing, touch, and speech."
          src="/images/inclusive.png"
        />
      </div>
    }
    secondColumn={
      <>
        <h2>Disability is not a monolith</h2>
        <p></p>
        <a
          href="https://inclusive.microsoft.design"
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: "1.75rem" }}
        >
          Source: Microsoft Inclusive Design
        </a>
      </>
    }
  />
)
