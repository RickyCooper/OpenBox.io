import React, { useCallback, useState } from 'react';

import Backdrop from 'components/UI/Backdrop/Backdrop';
import Button from 'components/UI/Button/Button';
import Connect from 'components/Connect/Connect';
import Modal from 'components/UI/Modal/Modal';
import styles from './landing.module.scss';

const Landing = () => {
    const [showModal, setShowModal] = useState();

    const switchModal = useCallback(() => {
        switch (showModal) {
        case `join`:
            return (
                <Connect
                    connectionType={`join`}
                    back={() => setShowModal(``)}
                />
            );
        case `host`:
            return (
                <Connect
                    back={() => setShowModal(``)}
                    connectionType={`host`}
                />
            );
        default:
            return (
                <div className={styles.btnGroup}>
                    <Button
                        styling={`Default`}
                        clicked={() => setShowModal(`host`)}
                    >
                            HOST
                    </Button>
                    <p className={styles.Or}>
                        <span>OR</span>
                    </p>
                    <Button
                        styling={`Default`}
                        clicked={() => setShowModal(`join`)}
                    >
                            JOIN
                    </Button>
                    <p className={styles.Login}>Login / Register</p>
                </div>
            );
        }
    }, [setShowModal, showModal]);

    return (
        <>
            <Modal>{switchModal()}</Modal>
            <Backdrop />
        </>
    );
};

export default Landing;
