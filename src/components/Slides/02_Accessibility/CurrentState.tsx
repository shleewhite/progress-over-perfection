import React, { type FC } from "react"

import { HorizontalThirdsSlideTemplate } from "../../SlideTemplates/HorizontalThirdsSlide"

export const AccessibilityCurrentState: FC = () => (
  <HorizontalThirdsSlideTemplate
    firstColumn={
      <h2 style={{ color: "var(--r-background-color)" }}>
        The current situation
      </h2>
    }
    secondColumn={
      <div
        style={{
          maxWidth: "60vw",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <p style={{ flexGrow: 1 }}>
          Each year, WebAIM does a study of the top million website&apos;s home
          pages. In 2023, the average home page had{" "}
          <strong>50 accessibility errors</strong>.
        </p>

        <a
          href="https://webaim.org/projects/million/"
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: "1.75rem", paddingBottom: "1rem" }}
        >
          Source: WebAIM Million
        </a>
      </div>
    }
  />
)
