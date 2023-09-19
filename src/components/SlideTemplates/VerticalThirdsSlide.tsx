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
    <div
      style={{
        height: "calc(100vh - 4px)",
        marginLeft: "4rem",
        marginRight: "4rem",
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        columnGap: "4rem",
      }}
    >
      <div
        style={{
          backgroundColor: "var(--r-heading-color)",
        }}
      >
        {firstColumn}
      </div>
      <div
        style={{
          paddingRight: "4rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          height: "100%",
        }}
      >
        {secondColumn}
      </div>
    </div>
  </Slide>
)
