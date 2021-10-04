import React from 'react';
import styles from './Button.module.css';

function Button(props) {
    return (
        <button type="button" className={styles[props.mainCSS]}>{props.title}</button>
    )
}

export default Button;