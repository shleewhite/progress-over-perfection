import React, { type FC } from "react"

import { Deck } from "./components/RevealComponents/Deck"
import { Slides } from "./components/Slides"

import "./styles/reveal.js/reset.css"
import "./styles/reveal.js/reveal.css"
import "./styles/reveal.js/theme/black.css"
import "./styles/plugin/accessibility.css"
import "./styles/override/override.css"

const App: FC = () => (
  <div className="app">
    <Deck>
      <Slides />
    </Deck>
  </div>
)

export default App
