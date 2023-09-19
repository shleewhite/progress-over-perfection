import React, { type FC } from "react"

import { VerticalThirdsSlideTemplate } from "../../SlideTemplates/VerticalThirdsSlide"

export const Intro: FC = () => (
  <VerticalThirdsSlideTemplate
    firstColumn={
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          alt="Lee smiling in Gasworks park in Seattle clutching a coffee cup."
          src="/images/lee.jpg"
        />
      </div>
    }
    secondColumn={
      <>
        <h2>Hi! I&apos;m Lee.</h2>
        <p style={{ fontSize: "1.75rem" }}>Pronouns: she/her</p>
        <p>
          I am a UX Engineer who specializes in accessibility. I currently work
          at Olark and was at Salesforce and Twilio previously.{" "}
        </p>
        <p>In my free time, I trail run and knit sweaters.</p>
      </>
    }
  />
)
