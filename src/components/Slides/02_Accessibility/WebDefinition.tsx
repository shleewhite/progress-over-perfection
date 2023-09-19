import React, { type FC } from "react"

import { HorizontalThirdsSlideTemplate } from "../../SlideTemplates/HorizontalThirdsSlide"

export const AccessibilityWebDefinition: FC = () => (
  <HorizontalThirdsSlideTemplate
    firstColumn={
      <h2 style={{ color: "var(--r-background-color)" }}>Web Accessibility</h2>
    }
    secondColumn={
      <div style={{ maxWidth: "60vw" }}>
        <p>
          Web accessibility means that websites, tools, and technologies are
          designed and developed so that people with disabilities can use them.
        </p>
        <p>
          It is a legal requirement for many industries, though the regulations
          differ between countries.
        </p>
        <a
          href="https://www.w3.org/WAI/fundamentals/accessibility-intro/"
          target="_blank"
          rel="noreferrer"
          style={{ width: "fit-content", fontSize: "1.75rem" }}
        >
          Source: W3C Introduction to Web Accessibility
        </a>
      </div>
    }
  />
)
