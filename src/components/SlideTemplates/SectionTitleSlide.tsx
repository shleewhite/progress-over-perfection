import React, { type FC, type ReactNode } from "react"

import { Slide } from "../RevealComponents/Slide"

interface ISectionTitleSlideTemplateProps {
  heading?: ReactNode
}

export const SectionTitleSlideTemplate: FC<ISectionTitleSlideTemplateProps> = ({
  heading,
}) => (
  <Slide>
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontWeight: "900",
          fontStyle: "italic",
          fontSize: "8rem",
          fontFamily: "Playfair Display, Helvetica, sans-serif",
        }}
      >
        {heading}
      </h2>
    </div>
  </Slide>
)
