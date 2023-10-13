import React, { type FC, type ReactNode } from "react"

import { Slide } from "../RevealComponents/Slide"

interface ITitleSlideTemplateProps {
  heading?: ReactNode
  subHeading?: ReactNode
}

export const TitleSlideTemplate: FC<ITitleSlideTemplateProps> = ({
  heading,
  subHeading,
}) => (
  <Slide>
    <div className="title-slide">
      <div>
        <h2>{heading}</h2>
        <p className="subheading">{subHeading}</p>
      </div>
      <aside>
        <p>Lee White</p>
        <p>Accessibility Engineer, Olark</p>
        <p>LibertyJS | October 13th, 2023</p>
      </aside>
    </div>
  </Slide>
)
