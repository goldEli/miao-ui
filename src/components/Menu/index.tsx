import React from "react"
import Menu, {MenuProps} from "./menu"
import MenuItem, {MenuItemProps} from "./menuItem"
import SubMenu, {SubMenuProps} from "./subMenu"

type MenuComponent = React.FC<MenuProps> & {
    Item: React.FC<MenuItemProps>;
    SubMenu: React.FC<SubMenuProps>;
}

const TransferMenu = Menu as MenuComponent
TransferMenu.Item = MenuItem
TransferMenu.SubMenu = SubMenu

export default TransferMenu