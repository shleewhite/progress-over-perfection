import React, { type FC } from "react"

import { HorizontalThirdsSlideTemplate } from "../../SlideTemplates/HorizontalThirdsSlide"

export const Resources: FC = () => (
  <HorizontalThirdsSlideTemplate
    firstColumn={
      <h2 style={{ color: "var(--r-background-color)" }}>
        Next Steps For Your Journey
      </h2>
    }
    secondColumn={
      <div
        style={{
          display: "grid",
          gridTemplateAreas:
            '"coding general design""coding community community"',
          gap: "2rem",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "2rem",
            padding: "1rem",
            gridArea: "coding",
            height: "fit-content",
          }}
        >
          <h3>Coding</h3>
          <ul>
            <li>
              <a
                href="https://www.w3.org/WAI/ARIA/apg/"
                target="_blank"
                rel="noreferrer"
              >
                ARIA Authoring Practices Guide
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
                href="https://www.scottohara.me/blog/2018/03/03/landmarks.html"
                target="_blank"
                rel="noreferrer"
              >
                How to use HTML landmarks
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://yakim.nl/articles/voiceover-testing/"
              >
                Testing with VoiceOver
              </a>
            </li>
            <li>
              <a href="https://www.deque.com/axe-devtools-accessibility-testing/">
                axe devtools
              </a>
            </li>
          </ul>
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "2rem",
            padding: "1rem",
            gridArea: "general",
            height: "fit-content",
          }}
        >
          <h3>General</h3>
          <ul>
            <li>
              <a
                href="https://www.w3.org/TR/WCAG22/"
                target="_blank"
                rel="noreferrer"
              >
                Web Content Accessibility Guidelines (WCAG)
              </a>
            </li>
            <li>
              <a
                href="https://www.udacity.com/course/web-accessibility--ud891#"
                target="_blank"
                rel="noreferrer"
              >
                Web accessibility by Google course
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
              <a href="https://inclusivedesign24.org/2022/">#id24</a>
            </li>
          </ul>
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "2rem",
            padding: "1rem",
            gridArea: "design",
            height: "fit-content",
          }}
        >
          <h3>Design</h3>
          <ul>
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
                href="https://inclusive.microsoft.design"
                target="_blank"
                rel="noreferrer"
              >
                Microsoft Inclusive Design
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
          </ul>
        </div>

        <p style={{ gridArea: "community", justifySelf: "flex-end" }}>
          ...and join the{` `}
          <a href="https://web-a11y.slack.com/">
            accessibility Slack community
          </a>
          !
        </p>
      </div>
    }
  />
)
