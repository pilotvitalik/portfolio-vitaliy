import React from 'react';
import Button from 'components/Button/Button';
import Modal from '../Modal/Modal';
import TypeIntroduction from './TypeIntroduction/TypeIntroduction';
import {useSelector, useDispatch} from 'react-redux';

import styles from './Main.module.css';

function Main(){
    const typeAuth = useSelector(state => state.main.typeAuth);
    const dispatch = useDispatch();

    const listAuth = typeAuth.map(item =>
        <TypeIntroduction button={item.buttonName} type={item.title} key={item.id}  func={showModal}/>
    );

    function showModal(){
        dispatch({type: 'main/showModal', payload: ''});
    }

    return (
        <div className={styles.main}>
            <header>
                <Button mainCSS="mainBtn" title="Войти" func={showModal}/>
            </header>
            <main>
                <div className={styles.greeting}>
                    <h3>Здравствуйте!</h3>
                    <h4>Вы находитесь на сайте-портфолио.</h4>
                </div>
                {listAuth}
            </main>
            <Modal/>
        </div>
    )
}

export default Main;