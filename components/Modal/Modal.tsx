import * as React from 'react';
import Button from '@/components/Button/Button';
import styles from './Modal.module.css';

const Modal: React.FC = ({}) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <div className={styles.modal__header}>
                </div>
                <div className={styles.modal__body}>
                    <p className={styles.info}>Данная опция будет доступна в ближайшее время</p>
                </div>
                <div className={styles.modal__footer}>
                    <Button title='Хорошо' styleCss='modalInfo__btn'/>
                </div>
            </div>
        </div>
    )
}

export default Modal;