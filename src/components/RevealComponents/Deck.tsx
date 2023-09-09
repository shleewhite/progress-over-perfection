import React, { useEffect, FC, ReactNode } from 'react';
import Reveal, {Options} from 'reveal.js';

import revealOptions from './revealOptions';

interface IDeckProps {
  options?: Options;
  children?: ReactNode
}

export const Deck: FC<IDeckProps> = ({ options, children }) => {
  useEffect(() => {
    const presentation = new Reveal({
      ...revealOptions,
      ...options
    })

    presentation.initialize()
  }, []);

  return (
    <div className="reveal">
      {/* <DecorativeBorder /> */}
      <div className="slides">{children}</div>
      {/* <Author>@KatCodes</Author> */}
    </div>
  );
};
