import React, { type FC } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Slide } from "../../RevealComponents/Slide"
import { MenuExample } from "../../Examples/Menu"

const codeSnippet = `<button id="actions-button" aria-controls="actions-menu"
  aria-haspopup="true"
>
  Actions
</button>
<div role="menu" id="actions-menu" 
  aria-labelledby="actions-button"
>
  <div role="menuitem">Edit</div>
  <div role="menuitem">Delete</div>
  <div role="menuitem">Clone</div>
</div>`

export const AriaProperty: FC = () => (
  <Slide>
    <div
      style={{
        margin: "4rem",
        display: "flex",
        flexDirection: "column",
        rowGap: "1rem",
      }}
    >
      <div>
        <h2>Property</h2>
        <p style={{ marginBottom: "0px" }}>
          Properties are <code>aria-*</code> attributes that do not change when
          the user interacts with the UI
        </p>
      </div>
      <div
        style={{
          display: "inline-grid",
          gridTemplateColumns: "2fr 1fr",
          justifyItems: "center",
        }}
      >
        <SyntaxHighlighter language="markup" style={a11yDark}>
          {codeSnippet}
        </SyntaxHighlighter>
        <div>
          <MenuExample />
        </div>
      </div>
    </div>
  </Slide>
)
