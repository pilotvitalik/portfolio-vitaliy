import type { NextPage } from 'next';
import Button from '@/components/Button/Button';
import styles from './Main.module.css'

const Main: NextPage = () => {
    return (
        <div className={styles.main}>
            <header>
                <Button title='Войти'/>
            </header>
            <main>
                <h3>Здравствуйте!</h3>
                <div className={styles.welcome}>
                    <p>
                        Вы находитесь на сайте портфолио. <br/>Здесь Вы можете ознакомиться с моими работами.
                    </p>
                    <Button  title='Ознакомиться'/>
                </div>
                <div className={styles.welcome}>
                    <p>
                        Для более детального ознакомления с работами, необходимо авторизоваться.
                    </p>
                    <Button  title='Зарегистрироваться'/>
                </div>
            </main>
        </div>
    )
}

export default Main
