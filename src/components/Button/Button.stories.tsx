import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { ButtonProps } from "./button";
import "../../styles/index.scss";

export default {
  title: "Example/Button",
  component: Button,
  decorators: [
    (Story) => (
      <div>
        <h3>组件展示</h3>
        <Story />
      </div>
    ),
  ],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

export const Base: Story<ButtonProps> = (props) => {
  return (
    <>
      <Button onClick={() => alert("hello world")}>default button</Button>
      <Button disabled>disabled button</Button>
    </>
  );
};

Base.storyName = "button";

export const DifferentSize: Story<ButtonProps> = (props) => {
  return (
    <>
      <Button onClick={() => alert("hello world")}>default</Button>
      <Button btnSize="small">small</Button>
      <Button btnSize="large">large</Button>
    </>
  );
};

DifferentSize.storyName = "不同大小的 button";

export const DifferentType: Story<ButtonProps> = (props) => {
  return (
    <>
      <Button btnType="default">default</Button>
      <Button btnType="primary">primary</Button>
      <Button btnType="danger">danger</Button>
      <Button btnType="link" target="blank" href="https://www.baidu.com">
        百度
      </Button>
    </>
  );
};

DifferentType.storyName = "不同类型的 button";
