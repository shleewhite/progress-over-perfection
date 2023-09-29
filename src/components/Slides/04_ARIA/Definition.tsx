import React, { type FC } from "react"

import { HorizontalThirdsSlideTemplate } from "../../SlideTemplates/HorizontalThirdsSlide"

export const AriaDefinition: FC = () => (
  <HorizontalThirdsSlideTemplate
    firstColumn={<h2 style={{ color: "var(--r-background-color)" }}>ARIA</h2>}
    secondColumn={
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <p style={{ flexGrow: 1 }}>
          ARIA is a specification maintained by the W3C that establishes roles,
          states, and properties for common UI elements to make them accessible.
        </p>
        <a
          href="https://www.w3.org/WAI/ARIA/apg/about/aria-basics/"
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: "1.75rem", paddingBottom: "1rem" }}
        >
          Source: ARIA Basics
        </a>
      </div>
    }
  />
)
