import React, { type FC } from "react"

import { HorizontalThirdsSlideTemplate } from "../../SlideTemplates/HorizontalThirdsSlide"

export const AriaLibraries: FC = () => (
  <HorizontalThirdsSlideTemplate
    firstColumn={
      <h2 style={{ color: "var(--r-background-color)" }}>
        Don&apos;t reinvent the wheel
      </h2>
    }
    secondColumn={
      <>
        <p>
          Libraries like{" "}
          <a href="https://www.radix-ui.com" target="_blank" rel="noreferrer">
            Radix UI
          </a>
          ,{" "}
          <a href="https://ariakit.org" target="_blank" rel="noreferrer">
            Ariakit
          </a>{" "}
          and{" "}
          <a
            href="https://react-spectrum.adobe.com/react-aria/"
            target="_blank"
            rel="noreferrer"
          >
            React Aria
          </a>{" "}
          provide low level React components and hooks to make accessible
          components that don&apos;t exist out of the box in HTML.
        </p>
      </>
    }
  />
)
