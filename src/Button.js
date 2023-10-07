import propTypes from 'prop-types'
import { useState } from 'react';
import styles from "./Button.module.css";

function Button({ text, onClick }) {
    return (
        <button onClick={onClick} className={styles.Btn}>{text}</button>
    )
}

Button.propTypes = {
    text: propTypes.string.isRequired
}

export default Button