import React from 'react';
import Button from 'components/Button/Button';
import styles from './Modal.module.css';
import {useSelector, useDispatch} from "react-redux";

function Modal(){
    const isShowModal = useSelector(state => state.main.isShowModal);
    const dispatch = useDispatch();

    function closeModal(){
        dispatch({type: 'main/closeModal', payload: ''})
    }

    return (
        <div className={`${styles.modal} ${(isShowModal) ? styles.showModal : ''}`}>
            <div className={styles.modal__content}>
                <p className={styles.tempClose}>
                    Сервис будет активен в ближайшее время
                </p>
                <Button mainCSS={['mainBtn', 'tmpCloseBtn']} title='Хорошо' func={closeModal}></Button>
            </div>
        </div>
    )
}

export default Modal;