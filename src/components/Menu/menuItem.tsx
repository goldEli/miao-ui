import React from "react"
import classNames from "classnames";
import { menuContext } from "./menu";

type MenuItemHTMLAttributes = React.LiHTMLAttributes<HTMLLIElement>

interface MenuItemBaseProps {
    disabled?: boolean;
    index?:string;
}

export type MenuItemProps = MenuItemHTMLAttributes & MenuItemBaseProps

const MenuItem: React.FC<MenuItemProps> = props => {
    const {activeIndex, onChangeActiveIndex} = React.useContext(menuContext)
    const {
        disabled,
        className,
        ...restProps
    } = props
    const prefixCls = "menu-item"
    const classes = classNames(
        prefixCls,
        {
            "is-disabled": disabled,
            "is-active": activeIndex === props.index
        },
        className,
    );

    const handleClick = () => {
        if (!props.disabled && props.index !== void 0) {
            onChangeActiveIndex?.(props.index)
        }
    }

    return <li onClick={handleClick} {...restProps} className={classes}>
        {props.children}
    </li>
}

MenuItem.defaultProps = {
    disabled: false
}

MenuItem.displayName = "MenuItem"

export default MenuItem