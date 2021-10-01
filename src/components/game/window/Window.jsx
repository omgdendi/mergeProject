import React from "react";
import styles from './Window.module.css';

const Window = (props) => {

    let onCloseQuestion = () => {
        props.closeQuestion();
    }

    return (
        props.isQuestionShown ? <div className={styles.window}>
                {props.question} <br/>
                <button onClick={onCloseQuestion}>Закрыть</button>
            </div>
            : <div></div>

    )
}

export default Window