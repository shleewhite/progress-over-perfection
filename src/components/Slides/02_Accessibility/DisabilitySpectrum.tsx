import React, { type FC } from "react"

import { Slide } from "../../RevealComponents/Slide"

export const AccessibilityDisabilitySpectrum: FC = () => (
  <Slide>
    <div className="disability-spectrum-slide">
      <h2 className="visually-hidden">Disability is a spectrum</h2>
      <ul>
        <li>Permanent</li>
        <hr />
        <li>Temporary</li>
        <hr />
        <li>Situational</li>
      </ul>
    </div>
  </Slide>
)
