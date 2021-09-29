import type { NextPage } from 'next';
import styles from './Button.module.css';

interface Props{
    title? : string;
}

const Button: NextPage<Props> = ({title}) => {
    return (
        <button className={styles.main__btn}>{title}</button>
    )
}

export default Button
