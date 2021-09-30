import * as React from 'react';
import styles from './Button.module.css';

type Props = {
    title: string
    styleCss: string
}

const Button: React.FC<Props> = ({ title, styleCss }) => {
    function showInfoModal(e: any){
        console.log(e)
    }

    return (
        <button type='button' className={styles[styleCss]} onClick={showInfoModal}>{title}</button>
    )
}


export default Button
