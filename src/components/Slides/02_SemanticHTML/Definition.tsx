import React, {FC} from 'react'

import {Slide} from '../../RevealComponents/Slide'

export const SemanticHTMLDefinition: FC = () => (
  <Slide>
    <h2>Semantic HTML definition</h2>
    <p>Semantic HTML is HTML that introduces meaning to the web page rather than just presentation.</p>

    <div className='fragment fade-in'>
      <h3>Semantic tags</h3>
      <ul>
        <li>fieldset</li>
        <li>ul</li>
        <li>table</li>
        <li>button</li>
        <li>input</li>
        <li>a</li>
        <li>p</li>
        <li>h2</li>
      </ul>
    </div>

    <div className='fragment fade-in'>
      <h3>Non-semantic tags</h3>
      <ul>
        <li>div</li>
        <li>hr</li>
        <li>span</li>
        <li>br</li>
      </ul>
    </div>

    <p>Source:
      <a href="https://www.thoughtco.com/why-use-semantic-html-3468271" target='_blank' rel='noreferrer'>
        Why use semantic HTML?
      </a>
    </p>
  </Slide>
)