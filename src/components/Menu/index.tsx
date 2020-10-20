import React from "react"
import Menu, {MenuProps} from "./menu"
import MenuItem, {MenuItemProps} from "./menuItem"

type MenuComponent = React.FC<MenuProps> & {
    Item: React.FC<MenuItemProps>;
}

const TransferMenu = Menu as MenuComponent
TransferMenu.Item = MenuItem

export default TransferMenu