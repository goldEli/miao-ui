import React from "react"
import { MenuItemProps } from "./menuItem";

export interface MenuProps {
    defaultIndex?: string
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

    return <ul className="miao-menu">
        <menuContext.Provider value={contextProps}>
            {renderChildren()}
        </menuContext.Provider>

    </ul>
}

Menu.defaultProps = {
    defaultIndex: "0"
}

export default Menu