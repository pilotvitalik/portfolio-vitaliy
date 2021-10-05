import React from 'react';
import Button from 'components/Button/Button';
import styles from './TypeIntroduction.module.css';

function TypeIntroduction(props){
    return(
        <div className={styles.type}>
            <h4>{props.type}</h4>
            <Button mainCSS={['mainBtn', 'mainBtn__type']} title={props.button}  func={props.func}/>
        </div>
    )
}

export default TypeIntroduction;