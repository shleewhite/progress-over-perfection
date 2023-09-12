import React, {FC} from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import {Slide} from '../../RevealComponents/Slide'

const codeSnippet = `<div role="menu">
  <div role="menuitem">Edit</div>
  <div role="menuitem">Delete</div>
</div>`

export const AriaRole: FC = () => (
  <Slide>
    <div role='navigation' aria-label='ARIA major concepts'>
    <ol>
      <li aria-current='true'>Role</li>
      <li>Property</li>
      <li>State</li>
    </ol>
    </div>
    <h2>Role</h2>
    <p>Roles are element types that will not change with time or user actions. They set expectations for how the user can interact with the UI.</p>
    <SyntaxHighlighter language='markup' style={a11yDark}>
      {codeSnippet}
    </SyntaxHighlighter>
  </Slide>
)