import React from 'react';
import styles from './Button.module.css';

function Button(props) {
    let listCSSClasses = styles[props.mainCSS];

    if (Array.isArray(props.mainCSS)){
        listCSSClasses = props.mainCSS.reduce((prev, item, index) => {
            if (index !== props.mainCSS.length - 1){
                prev += `${styles[item]} `;
            } else {
                prev += styles[item];
            }
            return prev;
        }, '')
    }

    return (
        <button type="button" className={listCSSClasses}
            onClick={props.func}>{props.title}</button>
    )
}

export default Button;