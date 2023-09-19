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
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "grid",
        gridTemplateRows: "1fr 3fr",
        alignItems: "flex-start",
        rowGap: "2rem",
      }}
    >
      <div
        style={{
          paddingLeft: "4rem",
          paddingRight: "4rem",
          backgroundColor: "var(--r-heading-color)",
          height: "100%",
          display: "inline-grid",
          gridTemplateRows: "auto",
          alignContent: "center",
        }}
      >
        {firstColumn}
      </div>
      <div
        style={{
          paddingLeft: "4rem",
          paddingRight: "4rem",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          rowGap: "2rem",
        }}
      >
        {secondColumn}
      </div>
    </div>
  </Slide>
)
