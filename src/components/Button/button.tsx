import React from "react"
import classNames from "classnames"

type BtnType = "primary" | "danger" | "link" | "default"

type BtnSize = "small" | "large"

type ButtonHTMLAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>
type AnchorHTMLAttributes = React.AnchorHTMLAttributes<HTMLAnchorElement>

export interface ButtonPropsBase {
  /**设置 Button 是否禁用 */
  disabled?: boolean;
  /**设置 Button 的类型*/
  btnType?: BtnType;
  /**设置 Button 的大小 */
  btnSize?: BtnSize;
}

export type ButtonProps = Partial<ButtonHTMLAttributes> & Partial<ButtonPropsBase> & Partial<AnchorHTMLAttributes>

/**
 * 按钮组件，适合于页面中确定、提交等交互
 * ### 组件引入
 * ```js
 * import {Button} from "@miao-ui"
 * ```
 * 
 */
export const Button: React.FC<ButtonProps> = props => {
  const {
    disabled,
    btnType,
    href,
    className,
    btnSize,
    ...restProps
  } = props
  const prefixCls = "miao-btn"
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${btnType}`]: btnType,
      [`${prefixCls}-${btnSize}`]: btnSize,
    },
    className,
  );

  if (btnType === "link" && href !== void 0) {
  return <a className={classes} {...restProps} href={href}>{props.children}</a>
  }
  return <button className={classes} disabled={disabled} {...restProps}>{props.children}</button>
}

Button.defaultProps={
  disabled: false,
  btnType: "default"
}
export default Button