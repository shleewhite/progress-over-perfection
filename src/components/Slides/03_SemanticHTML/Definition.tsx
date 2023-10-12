import React, { type FC } from "react"

import { HorizontalThirdsSlideTemplate } from "../../SlideTemplates/HorizontalThirdsSlide"

export const SemanticHTMLDefinition: FC = () => (
  <HorizontalThirdsSlideTemplate
    firstColumn={
      <h2 style={{ color: "var(--r-background-color)" }}>Semantic HTML</h2>
    }
    secondColumn={
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          paddingBottom: "4rem",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <p style={{ marginBottom: "2rem" }}>
            Semantic HTML is HTML that introduces meaning to the web page rather
            than just presentation.
          </p>
          <div
            style={{
              marginTop: "2rem",
              marginLeft: "4rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              fontSize: "2rem",
            }}
          >
            <div>
              <h3
                style={{ fontWeight: "bold", fontFamily: "var(--r-main-font)" }}
              >
                Semantic tags
              </h3>
              <ul
                style={{
                  listStyleType: "none",
                  margin: 0,
                  padding: 0,
                  fontFamily: "var(--r-code-font)",
                }}
              >
                <li>fieldset</li>
                <li>ul</li>
                <li>table</li>
                <li>button</li>
              </ul>
            </div>
            <div>
              <h3
                style={{ fontWeight: "bold", fontFamily: "var(--r-main-font)" }}
              >
                Non-semantic tags
              </h3>
              <ul
                style={{
                  listStyleType: "none",
                  margin: 0,
                  padding: 0,
                  fontFamily: "var(--r-code-font)",
                }}
              >
                <li>div</li>
                <li>hr</li>
                <li>span</li>
                <li>br</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <a
            href="https://www.thoughtco.com/why-use-semantic-html-3468271"
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: "1.75rem" }}
          >
            Source: Why use semantic HTML?
          </a>
        </div>
      </div>
    }
  />
)
