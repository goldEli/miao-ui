import React from "react"
import classNames from "classnames"
import { MenuItemProps } from "./menuItem";

export interface SubMenuProps {
    title?: string;
    index?: string;
}

const SubMenu: React.FC<SubMenuProps> = props => {

    const [openStatus, setOpenStatus] = React.useState(false)

    const classes = classNames("menu-item submenu-item")

    const renderChildren = () => {
        return React.Children.map(props.children, (child, index) => {
            const ele = child as React.FunctionComponentElement<MenuItemProps>
            const {displayName} = ele.type
            if (displayName === "MenuItem") {
                return React.cloneElement(ele, {
                    index: props.index + "-" + index.toString()
                })
            }
            console.error("warning: SubMenu has a child which is not MenuItem")
        })
    }

    return (
        <li key={props.index} className={classes}>
            {props.title}
            <ul className="miao-submenu">
                {renderChildren()}
            </ul>
        </li>
    )
}

SubMenu.defaultProps = {
    title: "子菜单"
}

SubMenu.displayName = "SubMenu"

export default SubMenu