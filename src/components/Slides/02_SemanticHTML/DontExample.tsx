import React, {FC} from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import {Slide} from '../../RevealComponents/Slide'


const codeSnippet = `<div>
  <div class="heading">My website</div>
</div>
`

export const SemanticHTMLDontExample: FC = () => (
  <Slide>
    <h2>What not to do</h2>
    <SyntaxHighlighter language='markup' style={a11yDark}>{codeSnippet}</SyntaxHighlighter>
  </Slide>
)