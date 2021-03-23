import React, { useCallback, useEffect, useState } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import OpenBoxIcon from '../../../assets/svgs/svgIconLogo/svgIconLogo';
import OpenBoxText from '../../../assets/svgs/svgTextLogo/svgTextLogo';
import styles from './backdrop.module.scss';

const Backdrop = (props) => {
    const [lobby, setLobby] = useState(
        window.location.href.indexOf('lobby') > 0 ? true : false
    );

    useEffect(() => {
        setLobby(window.location.href.indexOf('lobby') > 0 ? true : false);
    }, [lobby]);

    let backdrop = (
        <Aux>
            <div className={styles.Backdrop}></div>
            <OpenBoxText />
            <OpenBoxIcon />
        </Aux>
    );

    if (lobby) {
        backdrop = (
            <div className={styles.BackdropLobby}>
                <OpenBoxIcon />
            </div>
        );
    }

    console.log(
        `%c ${lobby ? true : false}`,
        'color: blue; font-weight: bold;'
    );

    return <Aux>{backdrop}</Aux>;
};
export default Backdrop;
