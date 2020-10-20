import React from "react"
import { MenuItemProps } from "./menuItem";

export interface MenuProps {
    defaultIndex?: number
}

interface MenuContext {
    defaultIndex?: number
}



export const menuContext = React.createContext<MenuContext>({})

const Menu: React.FC<MenuProps> = props => {

    const renderChildren = () => {
        return React.Children.map(props.children, (child, index) => {
            const ele = child as React.FunctionComponentElement<MenuItemProps>
            const { displayName } = ele.type
            if (displayName === "MenuItem") {
                return React.cloneElement(ele, {
                    index
                })
            }
            return ele

        })
    }

    return <ul className="miao-menu">
        <menuContext.Provider value={{ defaultIndex: props.defaultIndex }}>
            {renderChildren()}
        </menuContext.Provider>

    </ul>
}

export default Menu