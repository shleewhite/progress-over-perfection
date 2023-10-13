import React, { type FC } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Slide } from "../../RevealComponents/Slide"
import { MenuExample } from "../../Examples/Menu"

const codeSnippet = `<button 
  id="actions-button"
  aria-controls="actions-menu"
  aria-haspopup="true"
  aria-expanded="true/false"
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
  <div role="menuitem">Clone</div>
</div>`

export const AriaState: FC = () => (
  <Slide>
    <div className="aria-explain-slide">
      <div>
        <h2>State</h2>
        <p>
          States are <code>aria-*</code> attributes used to indicate the current
          state of the UI.
        </p>
      </div>
      <div className="code-container">
        <div className="code-wrapper">
          <SyntaxHighlighter language="markup" style={a11yDark}>
            {codeSnippet}
          </SyntaxHighlighter>
        </div>
        <div className="menu-wrapper">
          <MenuExample />
        </div>
      </div>
    </div>
  </Slide>
)
