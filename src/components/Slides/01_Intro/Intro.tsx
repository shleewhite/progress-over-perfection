import React, { type FC } from "react"

import IntroPhoto from "../../../images/lee.jpg"
import { VerticalThirdsSlideTemplate } from "../../SlideTemplates/VerticalThirdsSlide"

export const Intro: FC = () => (
  <VerticalThirdsSlideTemplate
    firstColumn={
      <img
        alt="Lee smiling in Gasworks park in Seattle clutching a coffee cup."
        src={IntroPhoto}
      />
    }
    secondColumn={
      <>
        <h2>Hi! I&apos;m Lee.</h2>
        <p>Pronouns: she/her</p>
        <p>
          I am a UX Engineer who specializes in accessibility. I currently work
          at Olark and was at Salesforce and Twilio previously.
        </p>
        <p>In my free time, I trail run and knit sweaters (separately).</p>
      </>
    }
  />
)
