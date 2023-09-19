import React, { useEffect, type FC, type ReactNode } from "react"
import Reveal, { type Options } from "reveal.js"

import revealOptions from "./revealOptions"

interface IDeckProps {
  options?: Options
  children?: ReactNode
}

export const Deck: FC<IDeckProps> = ({ options, children }) => {
  useEffect(() => {
    const presentation = new Reveal({
      ...revealOptions,
      ...options,
    })

    void presentation.initialize()
  }, [options])

  return (
    <div className="reveal">
      <div className="slides">{children}</div>
    </div>
  )
}
