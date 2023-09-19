import React, { type FC } from "react"

import { HorizontalThirdsSlideTemplate } from "../../SlideTemplates/HorizontalThirdsSlide"

export const SemanticHTMLQuickTips: FC = () => (
  <HorizontalThirdsSlideTemplate
    firstColumn={
      <h2 style={{ color: "var(--r-background-color)" }}>
        Some common mistakes
      </h2>
    }
    secondColumn={
      <ul>
        <li>
          The headings of your page should be like the outline of an essay
        </li>
        <li>
          Anchors are not focusable with a keyboard if they do not have an href
          attribute
        </li>
        <li>
          All images should have an alt attribute. If the image is decorative,
          it should be &quot;&quot;
        </li>
        <li></li>
      </ul>
    }
  />
)
