import React from "react"
import classNames from "classnames"
import { MenuItemProps } from "./menuItem";
import Transition from "../Transition";
import Icon from "../Icon/icon"

export interface SubMenuProps {
    title?: string;
    index?: string;
}
let timer: any

const SubMenu: React.FC<SubMenuProps> = props => {

    const [openStatus, setOpenStatus] = React.useState(false)

    const classes = classNames("menu-item submenu-item")

    const renderChildren = () => {
        return React.Children.map(props.children, (child, index) => {
            const ele = child as React.FunctionComponentElement<MenuItemProps>
            const { displayName } = ele.type
            if (displayName === "MenuItem") {
                return React.cloneElement(ele, {
                    index: props.index + "-" + index.toString()
                })
            }
            console.error("warning: SubMenu has a child which is not MenuItem")
        })
    }

    
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer)
        e.preventDefault()
        timer = setTimeout(() => {
            setOpenStatus(toggle)
        }, 300)
    }

    return (
        <li
            onMouseEnter={(e) => handleMouse(e, true)}
            onMouseLeave={(e) => handleMouse(e, false)}
            key={props.index}
            className={classes}
        >
            <div className="submenu-title">
                {props.title}
                <Icon icon="angle-down" className="arrow-icon"/>
            </div>
            <Transition
                in={openStatus}
                timeout={300}
                classNames="zoom-in-top"
                unmountOnExit
                appear
            >
                <ul className="miao-submenu">
                    {renderChildren()}
                </ul>
            </Transition>

        </li>
    )
}

SubMenu.defaultProps = {
    title: "子菜单"
}

SubMenu.displayName = "SubMenu"

export default SubMenu