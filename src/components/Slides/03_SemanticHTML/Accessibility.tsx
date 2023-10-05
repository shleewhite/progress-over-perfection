import React, { type FC } from "react"

import { HorizontalThirdsSlideTemplate } from "../../SlideTemplates/HorizontalThirdsSlide"

export const SemanticHTMLAccessibility: FC = () => (
  <HorizontalThirdsSlideTemplate
    firstColumn={
      <h2 style={{ color: "var(--r-background-color)" }}>
        Semantic HTML is critical for accessibility
      </h2>
    }
    secondColumn={
      <>
        <p>
          Assistive technologies <em>can not</em> infer the purpose of a UI
          based on styles, it needs to be in the actual HTML of the page.
        </p>
        <div>
          <p>How using proper HTML helps users:</p>
          <ul>
            <li>
              Screen reader users look at the heading structure of a page to
              quickly scan the contents
            </li>
            <li>
              Voice dictation users can use commands like &quot;show links&quot;
              to find all the links on a page
            </li>
          </ul>
        </div>
      </>
    }
  />
)
