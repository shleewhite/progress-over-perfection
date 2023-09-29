import React, { type FC } from "react"

import { Slide } from "../../RevealComponents/Slide"

export const AccessibilityPeople: FC = () => (
  <Slide>
    <div
      style={{
        paddingLeft: "4rem",
        paddingRight: "4rem",
        height: "100vh",
        display: "grid",
        gridTemplateRows: "1fr 3fr",
      }}
    >
      <div style={{ display: "inline-grid", alignItems: "center" }}>
        <h2>Accessiblity is about people</h2>
      </div>

      <div
        style={{
          display: "inline-grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          columnGap: "4rem",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "inline-grid",
            gridTemplateRows: "auto 1fr auto",
            rowGap: "1rem",
          }}
        >
          <img
            alt="Four disabled people of color with canes and prosthetic legs laugh while chatting. They are on a rooftop deck, in chairs of various height, with greenery and city high-rises in the background."
            src="https://disabledandhere.files.wordpress.com/2019/10/dah-party02.jpg"
          />
          <p>
            Technology is a critical way people interact with the world and this
            is no different for people with disabilities.
          </p>
          <a
            href="https://affecttheverb.com/disabledandhere/"
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: "1.75rem", paddingBottom: "1rem" }}
          >
            Images: Disabled and Here
          </a>
        </div>
        <img
          alt="Portrait shot of a Deaf Black man wearing glasses and a KN-95 mask signing in a video chat via laptop. The man sits at a coffee table inside a community library packed with books and posters."
          src="https://affecttheverb.com/images/stock/dahasl-06-54bb19b9.jpg"
        />
        <div
          style={{
            display: "inline-grid",
            gridTemplateRows: "auto 1fr",
            rowGap: "1rem",
          }}
        >
          <p>
            When we fail to write accessible code or design accessible user
            flows, we are excluding people.
          </p>
          <img
            alt="Three Black and disabled folx laugh uproariously while strolling down a sidewalk on a windy day. On the left, a non-binary person walks with a cane in one hand and a tangle stim toy in the other. In the middle, a non-binary person rolls along in their power wheelchair. On the right, a femme walks with fabulously windswept hair. A street parking meter is in the background on the right."
            src="https://affecttheverb.com/images/stock/disabledandhere-005-4061fd7e.jpg"
          />
          <div />
        </div>
      </div>
    </div>
  </Slide>
)
