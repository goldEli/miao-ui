/*
 * @Author: miaoyu
 * @Date: 2020-10-07 10:39:32
 * @LastEditTime: 2020-10-09 16:02:06
 * @LastEditors: miaoyu
 * @Description: 
 */
import React from "react"
import { withInfo } from "@storybook/addon-info";
import { addDecorator, addParameters, configure } from "@storybook/react"

import "../src/styles/index.scss";

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   layout: 'padded',
// }

// addDecorator((Story) => <div><h3>组件展示</h3><Story /></div>)
// addDecorator(withInfo)
// export const decorators = [
//   (Story) => <div><h3>组件展示</h3><Story /></div>,
// ]
const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px'
}

const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
)
addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({info: { inline: true, header: false}})
const loaderFn = () => {
  const allExports = [require('../src/welcome.stories.tsx')];
  const req = require.context('../src/components', true, /\.stories\.tsx$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};


// automatically import all files ending in *.stories.js
configure(loaderFn, module);