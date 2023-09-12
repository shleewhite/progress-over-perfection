import React, {FC} from 'react'

import {Slide} from '../../RevealComponents/Slide'

export const AriaDisclaimer: FC = () => (
  <Slide>
    <h2>No ARIA is better than bad ARIA</h2>
    <p><strong>Giving an element a role is a promise.</strong> Unlike semantic HTML elements, ARIA roles do not cause browsers to provide keyboard behaviors or styling.</p>
    <p><strong>ARIA can hide the original semantics of HTML elements.</strong> ARIA attributes override HTML elements' default roles and properties. Using ARIA in non-standard ways makes UIs less accessible.</p>
    <p>Source: <a href="https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/" target='_blank' rel='noreferrer'>ARIA Authoring Practices "Read me first"</a></p>
  </Slide>
)