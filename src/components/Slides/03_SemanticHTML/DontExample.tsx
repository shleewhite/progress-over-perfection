import React, { type FC } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Slide } from "../../RevealComponents/Slide"

const codeSnippet = `<div>
  <div class="heading">Accessibility resources</div>
  <div>
    <div>What accessibility resources have you used?</div>
    <input />
    <div class="icon-button">
      // svg
    </div>
  </div>
  <div>
    <div class="heading-small">My favorites</div>
    <a href="https://www.a11yproject.com">A11y Project</a>
    <a href="https://www.w3.org/WAI/ARIA/apg/">ARIA Authoring Practices Guide</a>
    <a href="https://www.whocanuse.com/">Who can use</a>
  </div>
</div>
`

export const SemanticHTMLDontExample: FC = () => (
  <Slide>
    <div
      style={{
        height: "100vh",
        paddingRight: "4rem",
        paddingLeft: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 className="visually-hidden">What not to do</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          columnGap: "4rem",
        }}
      >
        <SyntaxHighlighter language="markup" style={a11yDark} wrapLines>
          {codeSnippet}
        </SyntaxHighlighter>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "0.3rem",
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            padding: "1rem",
            height: "fit-content",
          }}
        >
          <h3>Issues</h3>
          <ul>
            <li>Uses classes to indicate meaning visually</li>
            <li>Button with no label</li>
            <li>Text input with no label</li>
          </ul>
        </div>
      </div>
    </div>
  </Slide>
)
