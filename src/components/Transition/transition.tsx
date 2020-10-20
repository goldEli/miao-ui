import React from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition"

type TransitionMode = "zoom-in-top" | "zoom-in-left" | "zoom-in-right" | "zoom-in-bottom"

type TransitionProps = CSSTransitionProps & {
    classNames: TransitionMode
}

const Transition: React.FC<TransitionProps> = props => {
    return (
        <CSSTransition
            timeout={300}
            unmountOnExit
            appear
            {...props}
        >
            {props.children}
        </CSSTransition>
    )
}

Transition.defaultProps = {
    unmountOnExit: true,
    appear: true
}

export default Transition