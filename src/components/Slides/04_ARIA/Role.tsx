import React, { type FC } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Slide } from "../../RevealComponents/Slide"
import { MenuExample } from "../../Examples/Menu"

const codeSnippet = `<button>Actions</button>
<div role="menu">
  <div role="menuitem">Edit</div>
  <div role="menuitem">Delete</div>
  <div role="menuitem">Clone</div>
</div>`

export const AriaRole: FC = () => (
  <Slide>
    <div className="aria-explain-slide">
      <div>
        <h2>Role</h2>
        <p>
          Roles are element types that will not change with time or user
          actions. They set expectations for how the user can interact with the
          UI.
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
