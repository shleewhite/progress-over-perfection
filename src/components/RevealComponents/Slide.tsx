import React, { type ReactNode, type FC } from "react"
import { type Options } from "reveal.js"

interface ISlide {
  children?: ReactNode
  transition?: Options["transition"]
}

export const Slide: FC<ISlide> = ({ children, transition = "slide" }) => (
  <section data-transition={transition}>{children}</section>
)
