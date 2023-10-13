import React, { type FC } from "react"

import { Intro } from "./01_Intro/Intro"
import { Title } from "./01_Intro/Title"
import { Agenda } from "./01_Intro/Agenda"
import { AccessibilityTitle } from "./02_Accessibility/Title"
import { AccessibilityWebDefinition } from "./02_Accessibility/WebDefinition"
import { AccessibilityPeople } from "./02_Accessibility/People"
import { AccessibilityDisabilitySpectrum } from "./02_Accessibility/DisabilitySpectrum"
import { AccessibilityCurrentState } from "./02_Accessibility/CurrentState"
import { AccessibilityStats1 } from "./02_Accessibility/Stats1"
import { AccessibilityStats2 } from "./02_Accessibility/Stats2"
import { SemanticHTMLTitle } from "./03_SemanticHTML/Title"
import { SemanticHTMLDefinition } from "./03_SemanticHTML/Definition"
import { SemanticHTMLAccessibility } from "./03_SemanticHTML/Accessibility"
import { SemanticHTMLDontExample } from "./03_SemanticHTML/DontExample"
import { SemanticHTMLDoExample } from "./03_SemanticHTML/DoExample"
import { AriaTitle } from "./04_ARIA/Title"
import { AriaDefinition } from "./04_ARIA/Definition"
import { AriaDisclaimer } from "./04_ARIA/Disclaimer"
import { AriaRole } from "./04_ARIA/Role"
import { AriaProperty } from "./04_ARIA/Property"
import { AriaState } from "./04_ARIA/State"
import { AriaAPG } from "./04_ARIA/AriaAPG"
import { AriaLibraries } from "./04_ARIA/Libraries"
import { Resources } from "./05_Conclusion/Resources"
import { GAAD } from "./05_Conclusion/GAAD"
import { ThankYou } from "./05_Conclusion/ThankYou"
import { LinkToSlides } from "../SlideTemplates/LinkToSlides"

export const Slides: FC = () => (
  <>
    <Title />
    <LinkToSlides />
    <Intro />
    <Agenda />
    <AccessibilityTitle />
    <AccessibilityPeople />
    <AccessibilityStats1 />
    <AccessibilityStats2 />
    <AccessibilityDisabilitySpectrum />
    <AccessibilityWebDefinition />
    <AccessibilityCurrentState />
    <SemanticHTMLTitle />
    <SemanticHTMLDefinition />
    <SemanticHTMLAccessibility />
    <SemanticHTMLDontExample />
    <SemanticHTMLDoExample />
    <AriaTitle />
    <AriaDefinition />
    <AriaRole />
    <AriaProperty />
    <AriaState />
    <AriaAPG />
    <AriaLibraries />
    <AriaDisclaimer />
    <Resources />
    <LinkToSlides />
    <GAAD />
    <ThankYou />
  </>
)
