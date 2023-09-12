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
  }, [options]);

  return (
    <div className="reveal">
      <div className="slides">{children}</div>
      <aside style={{position: 'absolute', bottom: 24, left: 24, display: 'flex', flexDirection: 'column'}}>
        Lee White
        {/* <a>bit.ly/pop-libertyjs</a> */}
      </aside>
    </div>
  );
};
