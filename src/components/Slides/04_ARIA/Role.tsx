import React, { type FC } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Slide } from "../../RevealComponents/Slide"

const codeSnippet = `<div role="menu">
  <div role="menuitem">Edit</div>
  <div role="menuitem">Delete</div>
</div>`

export const AriaRole: FC = () => (
  <Slide>
    <div
      style={{
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        marginRight: "4rem",
        marginLeft: "4rem",
        columnGap: "1rem",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <div role="navigation" aria-label="ARIA major concepts">
        <ol
          style={{
            listStyleType: "none",
            margin: "0px",
            display: "flex",
            flexDirection: "column",
            rowGap: "2rem",
            width: "fit-content",
            fontSize: "1.75rem",
          }}
        >
          <li
            aria-current="true"
            style={{
              backgroundColor: "var(--r-heading-color)",
              color: "var(--r-background-color)",
              borderRadius: "1rem",
              padding: "1rem",
              display: "flex",
              alignItems: "center",
              columnGap: "1rem",
              wordBreak: "break-all",
            }}
          >
            Role
          </li>
          <li
            style={{
              borderColor: "var(--r-heading-color)",
              borderStyle: "solid",
              borderWidth: "1px",
              borderRadius: "1rem",
              padding: "1rem",
              display: "flex",
              alignItems: "center",
              columnGap: "1rem",
              wordBreak: "break-all",
            }}
          >
            Property
          </li>
          <li
            style={{
              borderColor: "var(--r-heading-color)",
              borderStyle: "solid",
              borderWidth: "1px",
              borderRadius: "1rem",
              padding: "1rem",
              display: "flex",
              alignItems: "center",
              columnGap: "1rem",
              wordBreak: "break-all",
            }}
          >
            State
          </li>
        </ol>
      </div>
      <div>
        <h2>Role</h2>
        <p>
          Roles are element types that will not change with time or user
          actions. They set expectations for how the user can interact with the
          UI.
        </p>
        <SyntaxHighlighter language="markup" style={a11yDark}>
          {codeSnippet}
        </SyntaxHighlighter>
      </div>
    </div>
  </Slide>
)
