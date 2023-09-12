import React, { FC } from 'react'

import { Intro } from './01_Intro/Intro'
import { Title } from './01_Intro/Title'
import { Agenda } from './01_Intro/Agenda'
import { SemanticHTMLTitle } from './02_SemanticHTML/Title'
import { SemanticHTMLDefinition } from './02_SemanticHTML/Definition'
import { SemanticHTMLA11y } from './02_SemanticHTML/Accessibility'
import { SemanticHTMLDontExample } from './02_SemanticHTML/DontExample'
import { SemanticHTMLDoExample } from './02_SemanticHTML/DoExample'
import { AriaTitle } from './03_ARIA/Title'
import { AriaDefinition } from './03_ARIA/Definition'
import { AriaDisclaimer } from './03_ARIA/Disclaimer'
import { AriaRole } from './03_ARIA/Role'
import { AriaProperty } from './03_ARIA/Property'
import { AriaState } from './03_ARIA/State'
import { AriaExample } from './03_ARIA/Example'
import { AriaAPG } from './03_ARIA/AriaAPG'
import { Resources } from './04_Conclusion/Resources'
import { ThankYou } from './04_Conclusion/ThankYou'

export const Slides: FC  = () => (<>
  <Title />
  <Intro />
  <Agenda />
  <SemanticHTMLTitle />
  <SemanticHTMLDefinition />
  <SemanticHTMLA11y />
  <SemanticHTMLDontExample />
  <SemanticHTMLDoExample />
  <AriaTitle />
  <AriaDefinition />
  <AriaDisclaimer />
  <AriaRole />
  <AriaProperty />
  <AriaState />
  <AriaExample />
  <AriaAPG />
  <Resources />
  <ThankYou />
</>)
