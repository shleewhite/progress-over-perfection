import React, { type FC } from "react"

import { HorizontalThirdsSlideTemplate } from "../../SlideTemplates/HorizontalThirdsSlide"

export const Resources: FC = () => (
  <HorizontalThirdsSlideTemplate
    firstColumn={
      <h2 style={{ color: "var(--r-background-color)" }}>Next Steps</h2>
    }
    secondColumn={
      <ul>
        <li>
          <a
            href="https://www.udacity.com/course/web-accessibility--ud891#"
            target="_blank"
            rel="noreferrer"
          >
            [Course] Udacity: Web Accessibility
          </a>
        </li>
        <li>
          <a
            href="https://www.a11yproject.com"
            target="_blank"
            rel="noreferrer"
          >
            A11y Project
          </a>
        </li>
        <li>
          <a
            href="https://www.stylemanual.gov.au/content-types/images/alt-text-captions-and-titles-images"
            target="_blank"
            rel="noreferrer"
          >
            Style guide for alt text
          </a>
        </li>
        <li>
          <a
            href="https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/"
            target="_blank"
            rel="noreferrer"
          >
            Accessible design posters
          </a>
        </li>
        <li>
          <a
            href="https://www.a11y-collective.com/blog/automated-accessibility-testing-a-few-scenarios/"
            target="_blank"
            rel="noreferrer"
          >
            Automated accessibility testing
          </a>
        </li>
        <li>
          <a
            href="https://inclusive.microsoft.design"
            target="_blank"
            rel="noreferrer"
          >
            Microsoft Inclusive Design
          </a>
        </li>
      </ul>
    }
  />
)
