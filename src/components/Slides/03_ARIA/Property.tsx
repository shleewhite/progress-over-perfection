import React, {FC} from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import {Slide} from '../../RevealComponents/Slide'

const codeSnippet = `<button aria-label="Open settings" aria-haspopup="dialog">
  <svg>
    // rest of SVG
  </svg>
</button>`

export const AriaProperty: FC = () => (
  <Slide>
    <div role='navigation' aria-label='ARIA major concepts'>
    <ol>
      <li>Role</li>
      <li aria-current='true'>Property</li>
      <li>State</li>
    </ol>
    </div>
    <h2>Property</h2>
    <p>Properties are <code>aria-*</code> attributes that do not change when the user interacts with the UI</p>
    <SyntaxHighlighter language='markup' style={a11yDark}>
      {codeSnippet}
    </SyntaxHighlighter>
  </Slide>
)