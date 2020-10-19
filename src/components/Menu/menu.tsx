import React from "react"

interface MenuProps {}

const Menu:React.FC<MenuProps> = props => {
    return <ul>
        <li>home</li>
        <li>products</li>
        <li>about</li>
        <li>vip</li>
        <li>other</li>
    </ul>
}

export default Menu