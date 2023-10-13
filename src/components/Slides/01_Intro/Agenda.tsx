import React, { type FC } from "react"

import { Slide } from "../../RevealComponents/Slide"

const agendaItems = ["Accessibility", "Semantic HTML", "ARIA", "Next Steps"]

export const Agenda: FC = () => (
  <Slide>
    <div className="agenda-slide">
      <div>
        <h2>Agenda</h2>
        <ol>
          {agendaItems.map((item, index) => (
            <li key={item}>
              <span className="agenda-item-number" aria-hidden="true">
                {index + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </div>
  </Slide>
)
