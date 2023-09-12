import React, {FC} from 'react'

import {Slide} from '../../RevealComponents/Slide'

export const Intro: FC = () => (
  <Slide>
    <h2>Hi! I'm Lee</h2>
    <p>I am a UX Engineer that specializes in accessibility.</p>
    {/* need to include a logo */}
    <p>Currently at Olark.</p> 
    <p>Pronouns: she/her</p>
  </Slide>
)