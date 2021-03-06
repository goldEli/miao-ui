import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// import { Story, Meta } from "@storybook/react/types-6-0";
import { storiesOf } from "@storybook/react";
// import { actions } from "@storybook/addon-actions";

import Button from "./button";


const DefaultButton = () => {
  return (
    <>
      <Button onClick={() => alert("hello world")}>default button</Button>
    </>
  );
};


const DifferentSize = () => {
  return (
    <>
      <Button onClick={() => alert("hello world")}>default</Button>
      <Button btnSize="small">small</Button>
      <Button btnSize="large">large</Button>
    </>
  );
};

const DifferentType = () => {
  return (
    <>
      <Button btnType="default">default</Button>
      <Button disabled>disabled</Button>
      <Button btnType="primary">primary</Button>
      <Button btnType="danger">danger</Button>
      <Button btnType="link" target="blank" href="https://www.baidu.com">
        百度
      </Button>
    </>
  );
};

storiesOf("Button", module)
  .add('介绍', DefaultButton)
  .add('不同大小的 Button', DifferentSize)
  .add('不同类型的 Button', DifferentType)