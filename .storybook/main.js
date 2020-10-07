/*
 * @Author: miaoyu
 * @Date: 2020-10-07 10:39:32
 * @LastEditTime: 2020-10-07 22:56:36
 * @LastEditors: miaoyu
 * @Description: 
 */
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ]
}