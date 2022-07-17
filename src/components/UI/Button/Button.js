import React from "react";
import buttons from './Button.module.css'

const Button = (props) => {
    return (
        <button
          type={props.type || 'button'}
          className={`${buttons.button} ${props.className}`}
          onClick={props.onClick}
          disabled={props.disabled}
        >
          {props.children}
        </button>
      );
}

export default Button;