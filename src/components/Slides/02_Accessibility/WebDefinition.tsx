import React, { type FC } from "react"

import { HorizontalThirdsSlideTemplate } from "../../SlideTemplates/HorizontalThirdsSlide"

export const AccessibilityWebDefinition: FC = () => (
  <HorizontalThirdsSlideTemplate
    firstColumn={
      <h2 style={{ color: "var(--r-background-color)" }}>Web Accessibility</h2>
    }
    secondColumn={
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          paddingBottom: "2rem",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <p>
            Web accessibility means that websites, tools, and technologies are
            designed and developed so that people with disabilities can use
            them.
          </p>
          <p>
            It is a legal requirement for many industries, though the
            regulations differ between countries.
          </p>
        </div>
        <div>
          <a
            href="https://www.w3.org/WAI/fundamentals/accessibility-intro/"
            target="_blank"
            rel="noreferrer"
            // style={{ fontSize: "1.75rem" }}
          >
            Source: W3C Introduction to Web Accessibility
          </a>
        </div>
      </div>
    }
  />
)
