import type { NextPage } from 'next';
import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import styles from './Main.module.css'

const Main: NextPage = () => {
    return (
        <div className={styles.main}>
            <header>
                <Button title='Войти' styleCss='main__btn'/>
                </header>
            <main>
                <section>
                    <h3>Здравствуйте!</h3>
                    <h2>Вы находитесь на сайте портфолио.</h2>
                </section>
                <div className={styles.welcome}>
                    <p>
                        Здесь Вы можете ознакомиться с моими работами.
                    </p>
                    <Button  title='Ознакомиться' styleCss='main__btn'/>
                </div>
                <div className={styles.welcome}>
                    <p>
                        Для более детального ознакомления с работами, необходимо авторизоваться.
                    </p>
                    <Button  title='Зарегистрироваться' styleCss='main__btn'/>
                </div>
            </main>
            <Modal />
        </div>
    )
}

export default Main
