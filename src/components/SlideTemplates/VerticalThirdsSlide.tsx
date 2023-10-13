import React, { type FC, type ReactNode } from "react"

import { Slide } from "../RevealComponents/Slide"

interface IVerticalThirdsSlideTemplateProps {
  firstColumn?: ReactNode
  secondColumn?: ReactNode
}

export const VerticalThirdsSlideTemplate: FC<
  IVerticalThirdsSlideTemplateProps
> = ({ firstColumn, secondColumn }) => (
  <Slide>
    <div className="vertical-third-slide">
      <div className="secondary-content">{firstColumn}</div>
      <div className="primary-content">{secondColumn}</div>
    </div>
  </Slide>
)
