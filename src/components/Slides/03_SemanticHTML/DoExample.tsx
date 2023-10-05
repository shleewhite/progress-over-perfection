import React, { type FC } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Slide } from "../../RevealComponents/Slide"

const codeSnippet = `<main>
  <h1>Accessibility resources</h1>
  <form>
    <label for="resource-input">What accessibility resources have you used?</label>
    <input id="resource-input" />
    <button type="submit" aria-label="Submit">
      // svg
    </button>
  </form>
  <div>
    <h2>My favorites</h2>
    <ul>
      <li>
        <a href="https://www.a11yproject.com">A11y Project</a>
      </li>
      <li>
        <a href="https://www.w3.org/WAI/ARIA/apg/">ARIA Authoring Practices Guide</a>
      </li>
      <li>
        <a href="https://www.whocanuse.com/">Who can use</a>
      </li>
    </ul>
  </div>
</main>
`

export const SemanticHTMLDoExample: FC = () => (
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
      <h2 className="visually-hidden">What you should do</h2>
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
          <h3>Benefits</h3>
          <ul>
            <li>Correct HTML tags are used</li>
            <li>The input is labelled</li>
            <li>Button has a label</li>
            <li>Links are in a list</li>
          </ul>
        </div>
      </div>
    </div>
  </Slide>
)
