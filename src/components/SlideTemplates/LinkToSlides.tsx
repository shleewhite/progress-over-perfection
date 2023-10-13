import React, { type FC } from "react"

import { Slide } from "../RevealComponents/Slide"

export const LinkToSlides: FC = () => (
  <Slide>
    <div className="link-to-slides">
      <p>
        Slides: <a href="https://bit.ly/libjs-pop">bit.ly/libjs-pop</a>
      </p>
    </div>
  </Slide>
)
