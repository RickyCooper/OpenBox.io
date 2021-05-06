import OpenBoxIcon from '../../../assets/svgs/svgIconLogo/svgIconLogo';
import OpenBoxText from '../../../assets/svgs/svgTextLogo/svgTextLogo';
import React from 'react';
import styles from './backdrop.module.scss';

const Backdrop = ({ lobby }) => {
    let backdrop = (
        <>
            <div className={styles.Backdrop}></div>
            <OpenBoxText />
            <OpenBoxIcon />
        </>
    );

    if (lobby) {
        backdrop = (
            <div className={styles.BackdropLobby}>
                <OpenBoxIcon />
            </div>
        );
    }

    return <>{backdrop}</>;
};
export default Backdrop;
