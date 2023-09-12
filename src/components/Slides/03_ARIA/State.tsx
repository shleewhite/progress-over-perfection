import React, {FC} from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import {Slide} from '../../RevealComponents/Slide'

const codeSnippet = `<div role="switch" aria-checked={true/false}/>`

export const AriaState: FC = () => (
  <Slide>
    <div role='navigation' aria-label='ARIA major concepts'>
    <ol>
      <li>Role</li>
      <li>Property</li>
      <li aria-current='true'>State</li>
    </ol>
    </div>
    <h2>State</h2>
    <p>States are <code>aria-*</code> attributes used to indicate the current state of the UI.</p>
    <SyntaxHighlighter language='markup' style={a11yDark}>
      {codeSnippet}
    </SyntaxHighlighter>
  </Slide>
)