import React from 'react';
import Button from 'components/Button/Button';
import TypeIntroduction from './TypeIntroduction/TypeIntroduction';
import {useSelector} from 'react-redux';

import styles from './Main.module.css';

function Main(){
    const typeAuth = useSelector(state => state.main.typeAuth);

    const listAuth = typeAuth.map(item =>
        <TypeIntroduction button={item.buttonName} type={item.title} key={item.id}/>
    );
    return (
        <div className={styles.main}>
            <header>
                <Button mainCSS="mainBtn" title="Войти"/>
            </header>
            <main>
                <div className={styles.greeting}>
                    <h3>Здравствуйте!</h3>
                    <h4>Вы находитесь на сайте-портфолио.</h4>
                </div>
                {listAuth}
            </main>
        </div>
    )
}

export default Main;