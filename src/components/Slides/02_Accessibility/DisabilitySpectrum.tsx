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
          alt="Diagram indicating how disability: one person has one arm, another has an arm injury requiring a sling, and another is holding a baby their arm."
          src="/images/disability-spectrum.png"
          style={{ maxHeight: "80vh" }}
        />
      </div>
    }
    secondColumn={
      <>
        <h2></h2>
        <p></p>
      </>
    }
  />
)
