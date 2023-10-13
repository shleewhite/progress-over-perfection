import React, { type FC } from "react"

import { Slide } from "../../RevealComponents/Slide"
import { PeopleGrid } from "../../People/PeopleGrid"

export const AccessibilityStats1: FC = () => (
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
        Globally, 1 in 6 people have a disability.
      </h2>
      <PeopleGrid highlightedIndexes={[1, 9]} />
      <a
        href="https://www.who.int/news-room/fact-sheets/detail/disability-and-health#:~:text=An%20estimated%201.3%20billion%20people,earlier%20than%20those%20without%20disabilities."
        target="_blank"
        rel="noreferrer"
      >
        WHO Disability Fact Sheet
      </a>
    </div>
  </Slide>
)
