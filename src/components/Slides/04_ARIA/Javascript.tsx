import React, { type FC } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { Slide } from "../../RevealComponents/Slide"
import { MenuExample } from "../../Examples/Menu"

const codeSnippet = `const button = document.querySelector('button');
const menuItems = document.querySelectorAll('[role="menuitem"]');

button.addEventListener('click', () => {
  const isOpen = button.getAttribute('aria-expanded') === 'true';
  if (isOpen) {
    button.setAttribute('aria-expanded', false);
  } else {
    button.setAttribute('aria-expanded', true);
    menuItems[0].setAttribute('tabindex', '0');
    menuItems[0].focus();
  }
});
`

export const AriaJavascript: FC = () => (
  <Slide>
    <div className="aria-explain-slide">
      <div>
        <h2>JavaScript</h2>
        <p>
          Browsers don&apos;t add any functionality to HTML that uses ARIA, you
          are responsible for adding interactivity.
        </p>
      </div>
      <div className="code-container">
        <div className="code-wrapper">
          <SyntaxHighlighter language="javascript" style={a11yDark}>
            {codeSnippet}
          </SyntaxHighlighter>
        </div>
        <div className="menu-wrapper">
          <MenuExample />
        </div>
      </div>
    </div>
  </Slide>
)
