import React, { type FC } from "react"

export const MenuExample: FC = () => (
  <>
    <button
      className="button"
      id="actions-button"
      aria-controls="actions-menu"
      aria-haspopup="true"
      aria-expanded="true"
    >
      Actions
    </button>
    <div
      role="menu"
      className="menu"
      id="actions-menu"
      aria-labelledby="actions-button"
    >
      <div className="menu-item">Edit</div>
      <div className="menu-item">Delete</div>
      <div className="menu-item">Clone</div>
    </div>
  </>
)
