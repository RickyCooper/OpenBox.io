import React from 'react'; 
import styles from './modal.module.scss';

const Modal = (props) => {
    return <div className={styles.Modal}>{props.children}</div>
}

export default Modal