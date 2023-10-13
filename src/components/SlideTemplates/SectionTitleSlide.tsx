import React, { type FC, type ReactNode } from "react"

import { Slide } from "../RevealComponents/Slide"

interface ISectionTitleSlideTemplateProps {
  heading?: ReactNode
}

export const SectionTitleSlideTemplate: FC<ISectionTitleSlideTemplateProps> = ({
  heading,
}) => (
  <Slide>
    <div className="section-title-slide">
      <h2>{heading}</h2>
    </div>
  </Slide>
)
