import React, {ReactNode, FC} from 'react';
import {Options} from 'reveal.js'

interface ISlide {
  children?: ReactNode
  transition?: Options['transition']
}

export const Slide: FC<ISlide> = ({ children, transition = 'slide' }) => (
  <section data-transition={transition}>{children}</section>
);
