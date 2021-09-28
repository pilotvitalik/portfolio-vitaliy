import type { NextPage } from 'next';
import Main from './Main/Main';
import styles from '../styles/Portfolio.module.css';

const Portfolio: NextPage = () => {
  return (
    <div className={styles.portfolio}>
      <Main />
    </div>
  )
}

export default Portfolio
