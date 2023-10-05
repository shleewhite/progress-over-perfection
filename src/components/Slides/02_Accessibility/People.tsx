import React, { type FC } from "react"

import { Slide } from "../../RevealComponents/Slide"

export const AccessibilityPeople: FC = () => (
  <Slide>
    <div
      style={{
        padding: "4rem",
        display: "flex",
        rowGap: "2rem",
        flexDirection: "column",
      }}
    >
      <h2 style={{ margin: "0px" }}>Accessiblity is about people</h2>

      <div
        style={{
          display: "inline-grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto",
          columnGap: "4rem",
          flexGrow: 1,
        }}
      >
        <div>
          <p>
            Technology is a critical way people interact with the world and this
            is no different for people with disabilities.
          </p>
          <p>
            When we fail to write accessible code or design accessible user
            flows, we are excluding people.
          </p>
        </div>
        <div>
          <img
            alt="Four disabled people of color with canes and prosthetic legs laugh while chatting. They are on a rooftop deck, in chairs of various height, with greenery and city high-rises in the background."
            style={{ padding: "0.75rem", borderRadius: "4rem" }}
            src="https://disabledandhere.files.wordpress.com/2019/10/dah-party02.jpg"
          />
        </div>
      </div>
      <div>
        <a
          href="https://affecttheverb.com/disabledandhere/"
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: "1.75rem" }}
        >
          Image and alt text: Disabled and Here
        </a>
      </div>
    </div>
  </Slide>
)
