import React from 'react';
import Button from 'components/Button/Button';
import styles from './Modal.module.css';

function Modal(){
    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <p className={styles.tempClose}>
                    Сервис будет активен в ближайшее время
                </p>
                <Button mainCSS={['mainBtn', 'tmpCloseBtn']} title='Хорошо'></Button>
            </div>
        </div>
    )
}

export default Modal;