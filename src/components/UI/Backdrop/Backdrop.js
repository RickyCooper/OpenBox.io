import OpenBoxIcon from '../../../assets/svgs/svgIconLogo/svgIconLogo';
import OpenBoxText from '../../../assets/svgs/svgTextLogo/svgTextLogo';
import React from 'react';
import styles from './backdrop.module.scss';

const Backdrop = () => {
    return (
        <>
            <div className={styles.Backdrop}></div>
            <OpenBoxText />
            <OpenBoxIcon />
        </>
    );
};
export default Backdrop;
