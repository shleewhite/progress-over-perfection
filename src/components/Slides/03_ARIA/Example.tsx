import React, {FC} from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import {Slide} from '../../RevealComponents/Slide'

const codeSnippet = `<button aria-controls="my-content" aria-expanded="false">
  Show more
</button>
<div role="region" id="my-content">
  // contents of the accordion
</div>`

export const AriaExample: FC = () => (
  <Slide>
    <h2>Example</h2>
    <SyntaxHighlighter language='markup' style={a11yDark}>
      {codeSnippet}
    </SyntaxHighlighter>
  </Slide>
)