import React, { type FC } from "react"

import { Slide } from "../../RevealComponents/Slide"

export const AriaDisclaimer: FC = () => (
  <Slide>
    <div
      style={{
        width: "80vw",
        height: "100vh",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--r-main-font)",
          fontStyle: "normal",
          textAlign: "center",
        }}
      >
        No ARIA is better than bad ARIA
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          columnGap: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            style={{ width: "6rem" }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#1C274C"
              strokeWidth="1.5"
              d="M5.312 10.761C8.23 5.587 9.689 3 12 3c2.31 0 3.77 2.587 6.688 7.761l.364.645c2.425 4.3 3.638 6.45 2.542 8.022S17.786 21 12.364 21h-.728c-5.422 0-8.134 0-9.23-1.572s.117-3.722 2.542-8.022l.364-.645Z"
              opacity=".5"
            />
            <path
              stroke="#1C274C"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M12 8v5"
            />
            <circle cx="12" cy="16" r="1" fill="#1C274C" />
          </svg>
        </div>
        <p>
          <strong>Giving an element a role is a promise.</strong> Unlike
          semantic HTML elements, ARIA roles do not cause browsers to provide
          keyboard behaviors or styling.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          columnGap: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            style={{ width: "6rem" }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#1C274C"
              strokeWidth="1.5"
              d="M5.312 10.761C8.23 5.587 9.689 3 12 3c2.31 0 3.77 2.587 6.688 7.761l.364.645c2.425 4.3 3.638 6.45 2.542 8.022S17.786 21 12.364 21h-.728c-5.422 0-8.134 0-9.23-1.572s.117-3.722 2.542-8.022l.364-.645Z"
              opacity=".5"
            />
            <path
              stroke="#1C274C"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M12 8v5"
            />
            <circle cx="12" cy="16" r="1" fill="#1C274C" />
          </svg>
        </div>
        <p>
          <strong>
            ARIA can hide the original semantics of HTML elements.
          </strong>{" "}
          ARIA attributes override HTML elements&apos; default roles and
          properties. Using ARIA in non-standard ways makes UIs less accessible.
        </p>
      </div>
      <a
        href="https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/"
        target="_blank"
        rel="noreferrer"
        style={{ marginTop: "1rem" }}
      >
        Source: ARIA Authoring Practices &quot;Read me first&quot;
      </a>
    </div>
  </Slide>
)
