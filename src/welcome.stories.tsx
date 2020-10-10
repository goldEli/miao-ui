import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 miao-ui 组件库</h1>
        <p>miao-ui 基于 React 开发的一套组件库</p>
        <h3>安装试试</h3>
        <code>
          npm install @samuel.miao/miao-ui --save
        </code>
      </>
    )
  }, { info : { disable: true }})