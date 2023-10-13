import React, { type FC } from "react"

import { Slide } from "../../RevealComponents/Slide"
import { PeopleGrid } from "../../People/PeopleGrid"

export const AccessibilityStats2: FC = () => (
  <Slide>
    <div
      style={{
        paddingLeft: "4rem",
        paddingRight: "4rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        rowGap: "2rem",
        height: "100vh",
      }}
    >
      <h2 style={{ paddingTop: "1rem" }}>
        In the United States, 1 in 4 people have a disability.
      </h2>
      <PeopleGrid highlightedIndexes={[1, 5, 9]} />
      <a
        href="https://www.cdc.gov/media/releases/2018/p0816-disability.html"
        target="_blank"
        rel="noreferrer"
      >
        CDC Press Release
      </a>
    </div>
  </Slide>
)
