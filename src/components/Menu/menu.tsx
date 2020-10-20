import React from "react"
import { MenuItemProps } from "./menuItem";
import classNames from "classnames";

type MenuMode = "horizontal" | "vertical"
export interface MenuProps {
    defaultIndex?: string
    mode?: MenuMode
}

interface MenuContext {
    activeIndex: string;
    onChangeActiveIndex?: (index: string) => void
}

export const menuContext = React.createContext<MenuContext>({
    activeIndex: "0"
})

const Menu: React.FC<MenuProps> = props => {

    const [activeIndex, setActiveIndex] = React.useState(props.defaultIndex as string)

    const onChangeActiveIndex = (index: string) => {
        setActiveIndex(index)
    }

    const renderChildren = () => {
        return React.Children.map(props.children, (child, index) => {
            const ele = child as React.FunctionComponentElement<MenuItemProps>
            const { displayName } = ele.type
            if (displayName === "MenuItem") {
                return React.cloneElement(ele, {
                    index: index.toString()
                })
            }
            console.error("warning: Menu has a child which is not a MenuItem")

        })
    }

    const contextProps = {
        activeIndex: activeIndex,
        onChangeActiveIndex
    }

    const classes = classNames(
        "miao-menu",
        {
            "miao-menu-horizontal": props.mode === "horizontal",
            "miao-menu-vectical": props.mode === "vertical"
        },
    )

    return <ul className={classes}>
        <menuContext.Provider value={contextProps}>
            {renderChildren()}
        </menuContext.Provider>

    </ul>
}

Menu.defaultProps = {
    defaultIndex: "0",
    mode: "horizontal"
}

export default Menu