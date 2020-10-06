import React from "react"
import { render, fireEvent } from '@testing-library/react';

import Button, {ButtonProps} from "./button";

const defaultProps = {
  onClick: jest.fn()
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
}

describe("test button component", () => {
  it("should render the correct default button", () => {
    const wrapper = render(<Button {...defaultProps}>test</Button>);
    const element = wrapper.queryByText("test");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON")
    expect(element).toHaveClass("miao-btn miao-btn-default")
    expect(element.disabled).toBeFalsy()

    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
    
  })
  it("should render the correct component base on different props", () => {
    const wrapper = render(<Button btnType="primary" btnSize="large" className="ttt">test</Button>);
    const element = wrapper.queryByText("test");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON")
    expect(element).toHaveClass("miao-btn miao-btn-large miao-btn-primary ttt")

  })
  it("should render a link when btntype equals link and href is provided", () => {
    const wrapper = render(<Button btnType="link" href="https://www.baidu.com">link</Button>);
    const element = wrapper.queryByText("link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A")

    expect(element).toHaveClass("miao-btn miao-btn-link")
  })
  it("should render a disabled button when disabled set to true", () => {

    const wrapper = render(<Button {...disabledProps}>test</Button>);
    const element = wrapper.queryByText("test");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON")
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()

  })
})