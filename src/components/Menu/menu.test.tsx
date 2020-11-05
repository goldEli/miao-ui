import React from "react";
import { render, RenderResult, fireEvent, wait } from "@testing-library/react";
import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>test</MenuItem>
      <SubMenu title="dropMenu">
        <MenuItem>drop1</MenuItem>
      </SubMenu>
    </Menu>
  );
};

const testProps: MenuProps = {
  defaultIndex: "0",
  onSelect: jest.fn(),
  className: "test",
};

const testVerProps: MenuProps = {
  defaultIndex: "0",
  mode: "vertical",
};

let wrapper: RenderResult;
let wrapper2: RenderResult;
let menuElement: HTMLElement;
let activeElement: HTMLElement;
let disabledElement: HTMLElement;

describe("test Menu and MenuItem componnent in default(horizontal) mode", () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    menuElement = wrapper.getByTestId("test-menu");
    activeElement = wrapper.getByText("active");
    disabledElement = wrapper.getByText("disabled");
  });
  it("should render correct Menu and MenuItem based on default props", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("test miao-menu");
    expect(menuElement.querySelectorAll(":scope > li").length).toEqual(4);
    expect(activeElement).toHaveClass("is-active");
    expect(disabledElement).toHaveClass("is-disabled");
  });
  it("click items should change active and call the right callback", () => {
    const thirdItem = wrapper.getByText("test");
    fireEvent.click(thirdItem);

    expect(thirdItem).toHaveClass("is-active");
    expect(activeElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).toHaveBeenCalledWith("2");
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).not.toHaveBeenCalledWith("1");
  });
  it("should show dropDown items when hover on subMenu", async () => {
    expect(wrapper.queryByText("drop1")).toBeNull();
    const dropMenuElement = wrapper.getByText("dropMenu");
    fireEvent.mouseEnter(dropMenuElement);
    await wait(() => {
      expect(wrapper.getByText("drop1")).toBeInTheDocument();
    });
    const drop1Element = wrapper.getByText("drop1");
    fireEvent.click(drop1Element);
    expect(testProps.onSelect).toHaveBeenCalledWith("3-0") 

    fireEvent.mouseLeave(dropMenuElement);
    await wait(() => {
      expect(wrapper.queryByText("drop1")).toBeNull();
    })
  });
});

describe("test Menu and MenuItem component in vertical mode", () => {
  beforeEach(() => {
    wrapper2 = render(generateMenu(testVerProps))
  })
  it("should render vertical mode when mode is set to vertical", () => {
    const menuElement = wrapper2.getByTestId("test-menu")
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass("miao-menu-vectical")
  });
  it("should show dropdown items click on subMenue for vertical mode", async () => {
    expect(wrapper2.queryByText("drop1")).toBeNull();
    const dropMenuElement = wrapper2.getByText("dropMenu");
    fireEvent.click(dropMenuElement);
    await wait(() => {
      expect(wrapper2.getByText("drop1")).toBeInTheDocument();
    });
  });
});
