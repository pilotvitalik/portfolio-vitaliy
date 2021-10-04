import React from 'react';
import Button from 'components/Button/Button';
import TypeIntroduction from './TypeIntroduction/TypeIntroduction';
import styles from './Main.module.css';

function Main(props){
    return (
        <div className={styles.main}>
            <header>
                <Button mainCSS="mainBtn" title="Войти"/>
            </header>
            <main>
                <TypeIntroduction title="Ознакомиться"/>
                <TypeIntroduction title="Зарегистрироваться"/>
            </main>
        </div>
    )
}

export default Main;