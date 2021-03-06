import React from 'react';
import './Button.css';

const STYLES = [
    'btn--primary',
    'btn--outline'
]
const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    // Si el botón no tiene un style, por defecto se le pondrá el style en la posición 0
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    // Si el botón no tiene un size, por defecto se le pondrá el size en la posición 0
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}