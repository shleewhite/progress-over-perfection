import React, { type FC, type ReactNode } from "react"

import { Slide } from "../RevealComponents/Slide"

interface IHorizontalThirdsSlideTemplateProps {
  firstColumn?: ReactNode
  secondColumn?: ReactNode
}

export const HorizontalThirdsSlideTemplate: FC<
  IHorizontalThirdsSlideTemplateProps
> = ({ firstColumn, secondColumn }) => (
  <Slide>
    <div className="horizontal-third-slide">
      <div className="title">{firstColumn}</div>
      <div className="content">{secondColumn}</div>
    </div>
  </Slide>
)
