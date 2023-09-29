import React, { type FC } from "react"

import { Slide } from "../../RevealComponents/Slide"

const agendaItems = ["Accessibility", "Semantic HTML", "ARIA", "Next Steps"]

export const Agenda: FC = () => (
  <Slide>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          columnGap: "6rem",
        }}
      >
        <h2 style={{ alignSelf: "flex-start", justifySelf: "flex-end" }}>
          Agenda
        </h2>
        <ol
          style={{
            listStyleType: "none",
            margin: "0px",
            display: "flex",
            flexDirection: "column",
            rowGap: "2rem",
            maxWidth: "30vw",
          }}
        >
          {agendaItems.map((item, index) => (
            <li
              key={item}
              style={{
                backgroundColor: "var(--r-heading-color)",
                color: "var(--r-background-color)",
                borderRadius: "1rem",
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                columnGap: "1rem",
                wordBreak: "break-all",
              }}
            >
              <span
                style={{
                  backgroundColor: "var(--r-background-color)",
                  color: "var(--r-heading-color)",
                  borderRadius: "50%",
                  fontSize: "2rem",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "3rem",
                  height: "3rem",
                }}
              >
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
