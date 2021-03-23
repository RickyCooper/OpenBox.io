import React, { useCallback, useEffect, useState } from 'react';

import Button from '../UI/Button/Button';
import Connect from '../Connect/Connect';
import Modal from '../UI/Modal/Modal';
import axios from '../../shared/axios';
import styles from './landing.module.scss';

const Landing = () => {
    const [showModal, setShowModal] = useState();

    const switchModal = useCallback(() => {
        switch (showModal) {
            case 'join':
                return (
                    <Connect
                        joining
                        back={() => setShowModal('')}
                        buttonLabel={'join'}
                    />
                );
            case 'host':
                return (
                    <Connect back={() => setShowModal('')} buttonLabel={'host'} />
                );
            default:
                return (
                    <div className={styles.btnGroup}>
                        <Button
                            styleClass={'Default'}
                            clicked={() => setShowModal('host')}
                        >
                            HOST
                        </Button>
                        <p className={styles.Or}>
                            <span>OR</span>
                        </p>
                        <Button
                            styleClass={'Default'}
                            clicked={() => setShowModal('join')}
                        >
                            JOIN
                        </Button>
                        <p className={styles.Login}>Login / Register</p>
                    </div>
                );
        }
    }, [setShowModal, showModal]);

    return <Modal>{switchModal()}</Modal>;
};

export default Landing;

/*
useEffect(() => {
    axios({
        method: 'post',
        url: '/lobby',
        data: {
            playername: 'sam',
        },
    }).then((response) => {
        setPlayer(response.data.player);
        setLobby(response.data.lobby);
        console.log(response.data);
    });
}, []); */
