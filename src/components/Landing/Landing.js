import React from 'react';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import OpenBoxLogo from '../../assets/svgs/svgIconLogo/svgIconLanding'
import styles from './landing.module.scss'


const Landing = () => {
    return (
        <Modal center>
                <OpenBoxLogo/>
                <div className={styles.btnGroup}>
                <Button child={"CREATE"}/>
                <Button child={"JOIN"}/>
                </div>
        </Modal>
    );
} 

export default Landing; 