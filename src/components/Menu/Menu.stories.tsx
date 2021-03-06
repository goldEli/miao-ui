import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// import { Story, Meta } from "@storybook/react/types-6-0";
import { storiesOf } from "@storybook/react";
// import { actions } from "@storybook/addon-actions";

import Menu from "./index";

const {Item, SubMenu} = Menu


const DefaultMenu = () => {
  return (
    <>
      <Menu defaultIndex={"0"}>
        <Item>Home</Item>
        <Item>Products</Item>
        <Item disabled>VIP</Item>
        <SubMenu title="Other">
            <Item>sub menu 1</Item>
            <Item>sub menu 2</Item>
            <Item>sub menu 3</Item>
        </SubMenu>
      </Menu>
    </>
  );
};

const VectialtMenu = () => {
  return (
    <>
      <Menu mode="vertical" defaultIndex={"0"}>
        <Item>Home</Item>
        <Item>Products</Item>
        <Item disabled>VIP</Item>
        <SubMenu title="Other">
            <Item>sub menu 1</Item>
            <Item>sub menu 2</Item>
            <Item>sub menu 3</Item>
        </SubMenu>
      </Menu>
    </>
  );
};

storiesOf("Menu", module)
  .add('介绍', DefaultMenu)
  .add('垂直布局的 Menu', VectialtMenu)
//   .add('不同大小的 Button', DifferentSize)
//   .add('不同类型的 Button', DifferentType)