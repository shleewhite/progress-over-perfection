import React, { type FC } from "react"
import * as Ariakit from "@ariakit/react"
// import {MenuTrigger, Button, Popover, Menu, Item} from 'react-aria-components';

export const MenuExample: FC = () => {
  // const menu = Ariakit.useMenuStore({
  //   defaultOpen: true,
  // });

  return (
    <Ariakit.MenuProvider>
      <Ariakit.MenuButton className="button" showOnHover>
        Actions
        <Ariakit.MenuButtonArrow />
      </Ariakit.MenuButton>
      <Ariakit.Menu gutter={8} className="menu">
        <Ariakit.MenuItem className="menu-item">Edit</Ariakit.MenuItem>
        <Ariakit.MenuItem className="menu-item">Delete</Ariakit.MenuItem>
        <Ariakit.MenuItem className="menu-item">Clone</Ariakit.MenuItem>
      </Ariakit.Menu>
    </Ariakit.MenuProvider>
  )
}
