import React, { type FC, type ReactNode } from "react"

import { Slide } from "../RevealComponents/Slide"

interface ITitleSlideTemplateProps {
  heading?: ReactNode
  subHeading?: ReactNode
  footer?: ReactNode
}

export const TitleSlideTemplate: FC<ITitleSlideTemplateProps> = ({
  heading,
  subHeading,
  footer,
}) => (
  <Slide>
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "grid",
        gridTemplateRows: "4fr 1fr",
        rowGap: "4rem",
      }}
    >
      <div
        style={{
          padding: "2rem",
        }}
      >
        <h2
          style={{
            fontWeight: "900",
            fontStyle: "italic",
            fontSize: "6rem",
            fontFamily: "Playfair Display, Helvetica, sans-serif",
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            fontSize: "3rem",
            fontWeight: "900",
          }}
        >
          {subHeading}
        </p>
      </div>
      <aside
        style={{
          backgroundColor: "var(--r-main-color)",
          color: "var(--r-background-color)",
          fontSize: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "2rem",
          justifyContent: "center",
          rowGap: "0.5rem",
        }}
      >
        <p style={{ padding: 0, margin: 0 }}>Lee White</p>
        <p style={{ padding: 0, margin: 0 }}>Accessibility Engineer, Olark</p>
        <p style={{ padding: 0, margin: 0 }}>LibertyJS | October 13th, 2023</p>
      </aside>
    </div>
  </Slide>
)
