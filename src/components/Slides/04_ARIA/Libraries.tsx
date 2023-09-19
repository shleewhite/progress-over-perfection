import React, { type FC } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Slide } from "../../RevealComponents/Slide"

const codeSnippet = `import * as AriaKit from "@ariakit/react";

export default function Example() {
  return (
    <AriaKit.MenuProvider>
      <AriaKit.MenuButton>
        Actions
        <AriaKit.MenuButtonArrow />
      </AriaKit.MenuButton>
      <AriaKit.Menu gutter={8}>
        <AriaKit.MenuItem>Edit</AriaKit.MenuItem>
        <AriaKit.MenuItem>Share</AriaKit.MenuItem>
        <AriaKit.MenuItem disabled>Delete</AriaKit.MenuItem>
      </AriaKit.Menu>
    </AriaKit.MenuProvider>
  );
}`

export const AriaLibraries: FC = () => (
  <Slide>
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        marginRight: "4rem",
        marginLeft: "4rem",
      }}
    >
      <h2>Don&apos;t reinvent the wheel</h2>
      <p>
        Libraries like{" "}
        <a href="https://ariakit.org" target="_blank" rel="noreferrer">
          Ariakit
        </a>{" "}
        and{" "}
        <a
          href="https://react-spectrum.adobe.com/react-aria/"
          target="_blank"
          rel="noreferrer"
        >
          React Aria
        </a>{" "}
        provide low level React components and hooks to make accessible
        components that don&apos;t exist out of the box in HTML.
      </p>
      <SyntaxHighlighter language="jsx" style={a11yDark}>
        {codeSnippet}
      </SyntaxHighlighter>
    </div>
  </Slide>
)
