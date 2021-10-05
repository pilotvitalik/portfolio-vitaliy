import React from 'react';
import Button from 'components/Button/Button';
import styles from './Modal.module.css';

function Modal(){
    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <p>Модалка</p>
            </div>
        </div>
    )
}

export default Modal;