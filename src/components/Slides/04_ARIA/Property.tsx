import React, { type FC } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { SlideWithNavTemplate } from "../../SlideTemplates/SlideWithNav"
import { MenuExample } from "../../Examples/Menu"

const codeSnippet = `<button
  id="actions-button"
  aria-controls="actions-menu" 
  aria-haspopup="true"
>
  Actions
</button>
<div
  role="menu" 
  id="actions-menu"
  aria-labelledby="actions-button"
>
  <div role="menuitem">Edit</div>
  <div role="menuitem">Delete</div>
</div>`

export const AriaProperty: FC = () => (
  <SlideWithNavTemplate
    navItems={["Role", "Property", "State"]}
    currentIndex={1}
  >
    <>
      <div>
        <h2>Property</h2>
        <p>
          Properties are <code>aria-*</code> attributes that do not change when
          the user interacts with the UI
        </p>
      </div>
      <div
        style={{
          display: "inline-grid",
          gridTemplateColumns: "1fr 1fr",
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
    </>
  </SlideWithNavTemplate>
)
