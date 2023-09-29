import React, { type FC, type ReactNode } from "react"

import { Slide } from "../RevealComponents/Slide"

interface ISlideWithNavProps {
  navItems: string[]
  currentIndex: number
  children?: ReactNode
}

export const SlideWithNavTemplate: FC<ISlideWithNavProps> = ({
  navItems,
  currentIndex,
  children,
}) => (
  <Slide>
    <div
      style={{
        height: "100vh",
        margin: "4rem",
        display: "flex",
        flexDirection: "column",
        rowGap: "4rem",
      }}
    >
      {/* <div role="navigation" aria-label="ARIA major concepts">
        <ol
          style={{
            listStyleType: "none",
            margin: "0px",
            display: "flex",
            flexDirection: "row",
            columnGap: "2rem",
            width: "fit-content",
            fontSize: "1.75rem",
          }}
        >
          {navItems.map((item, i) => (
            <li
              key={item}
              aria-current={i === currentIndex}
              style={{
                backgroundColor:
                  i === currentIndex
                    ? "var(--r-heading-color)"
                    : "var(--r-background-color)",
                color:
                  i === currentIndex
                    ? "var(--r-background-color)"
                    : "var(--r-heading-color)",
                border:
                  i !== currentIndex
                    ? "1px solid var(--r-heading-color)"
                    : undefined,
                borderRadius: "1rem",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                columnGap: "1rem",
                wordBreak: "break-all",
                boxSizing: "border-box",
              }}
            >
              {item}
            </li>
          ))}
        </ol>
      </div> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "2rem",
        }}
      >
        {children}
      </div>
    </div>
  </Slide>
)
