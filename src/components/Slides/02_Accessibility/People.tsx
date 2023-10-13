import React, { type FC } from "react"

import { Slide } from "../../RevealComponents/Slide"

export const AccessibilityPeople: FC = () => (
  <Slide>
    <div className="people-slide">
      <h2>Accessiblity is about people</h2>
      <div className="content">
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
        <img
          alt="Four disabled people of color with canes and prosthetic legs laugh while chatting. They are on a rooftop deck, in chairs of various height, with greenery and city high-rises in the background."
          src="https://disabledandhere.files.wordpress.com/2019/10/dah-party02.jpg"
        />
      </div>
      <div>
        <a
          href="https://affecttheverb.com/disabledandhere/"
          target="_blank"
          rel="noreferrer"
        >
          Image and alt text: Disabled and Here
        </a>
      </div>
    </div>
  </Slide>
)
