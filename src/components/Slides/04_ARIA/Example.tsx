import React, { type FC } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Slide } from "../../RevealComponents/Slide"

const codeSnippet = `<button aria-controls="my-content" aria-expanded="false" id="accordion-id">
  Show more
</button>
<div role="region" id="my-content" aria-labelledby="accordion-id">
  // contents of the accordion
</div>`

export const AriaExample: FC = () => (
  <Slide>
    <div
      style={{
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr",
        marginRight: "4rem",
        marginLeft: "4rem",
        columnGap: "1rem",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <h2 className="visually-hidden">Example</h2>
      <SyntaxHighlighter language="markup" style={a11yDark}>
        {codeSnippet}
      </SyntaxHighlighter>
    </div>
  </Slide>
)
