import type { NextPage } from 'next';
import Button from '@/components/Button';
import styles from './Main.module.css'

const Main: NextPage = () => {
    return (
        <div className={styles.main}>
            <div>
                <Button title='Войти'/>
            </div>
            <div>
                <h3>Здравствуйте!</h3>
                <div>
                    <p>
                        Вы находитесь на сайте портфолио. Здесь Вы можете ознакомиться с моими работами.
                    </p>
                    <Button  title='Ознакомиться'/>
                </div>
                <div>
                    <p>
                        Для более детального ознакомления с работами, необходимо авторизоваться.
                    </p>
                    <Button  title='Зарегистрироваться'/>
                </div>
            </div>
        </div>
    )
}

export default Main
