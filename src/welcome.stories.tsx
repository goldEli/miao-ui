import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
    .add('welcome', () => {
        return (
            <>
                <h1>欢迎来到 miao-ui 组件库</h1>
                <p>miao-ui 基于 React 开发的一套组件库</p>
                <br/>
                <h3>Install</h3>
                <code>
                    npm install @samuel.miao/miao-ui --save
                </code>
                <br/>
                <h3>Usage</h3>
                <code>
                    // 加载样式<br/>
                    import '@samuel.miao/miao-ui/dist/index.css'<br/>
                    // 引入组件<br/>
                    import &#123;Button&#125; from '@samuel.miao/miao-ui'<br/>
            </code>
            </>
        )
    }, { info: { disable: true } })