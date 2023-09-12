import React, {FC} from 'react'

import {Slide} from '../../RevealComponents/Slide'

export const SemanticHTMLA11y: FC = () => (
  <Slide>
    <h2>Semantic HTML is critical for accessibility</h2>
    <p>Assistive technologies <em>can not</em> infer the purpose of a UI based on styles, it needs to be in the actual HTML of the page.</p>
    <p>Examples of how using proper HTML helps users</p>
    <ul>
      <li>Screen reader users look at the heading structure of a page to quickly scan the contents</li>
      <li>Voice dictation users can use commands like "show links" to find all the links on a page</li>
    </ul>
  </Slide>
)