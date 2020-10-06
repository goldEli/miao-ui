import React from "react"
import classNames from "classnames"

/**
 * primary danger default link
 * disable 
 * onclick
 */

enum BtnType {
  primary="primary",
  danger="danger",
  link="link",
  default="default"
}

enum BtnSize {
  small= "small",
  large= "large",
}

type ButtonHTMLAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>
type AnchorHTMLAttributes = React.AnchorHTMLAttributes<HTMLAnchorElement>

interface ButtonPropsBase {
  btnType: keyof typeof BtnType;
  btnSize: keyof typeof BtnSize;
}

export type ButtonProps = Partial<ButtonHTMLAttributes> & Partial<ButtonPropsBase> & Partial<AnchorHTMLAttributes>

const Button: React.FC<ButtonProps> = props => {
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
    return <a className={classes} {...restProps} href={href}>link</a>
  }
  return <button className={classes} disabled={disabled} {...restProps}>{props.children}</button>
}

Button.defaultProps={
  disabled: false,
  btnType: BtnType.default
}

export default Button