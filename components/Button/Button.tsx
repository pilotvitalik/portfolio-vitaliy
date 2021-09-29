import * as React from 'react';
import styles from './Button.module.css';

type Props = {
    title: string
    styleCss: string
}

const Button: React.FC<Props> = ({ title, styleCss }) => {
    return (
        <button className={styles[styleCss]}>{title}</button>
    )
}


export default Button
