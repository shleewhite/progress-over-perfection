import React, {FC} from 'react'

import {IntroSlide} from './Intro'
import { TitleSlide } from './Title'
import { TestSlide } from './Test'

export const Slides: FC  = () => (<>
<TitleSlide />
<IntroSlide />
<TestSlide />
</>)
