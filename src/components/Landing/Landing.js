import React, {useState, useCallback } from 'react';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import OpenBoxLogo from '../../assets/svgs/svgIconLogo/svgIconLanding'
import styles from './landing.module.scss'
import axios from  '../../shared/axios';

const Landing = () => {

    const [playerName, setPlayerName] = useState({});
    const [player, setPlayer] = useState({});
    const [lobby, setLobby] = useState({})

    const onCreateHandler = useCallback(
        () => {
        axios({
            method: 'post',
            url: '/lobby',
            data: {
                playername: 'sam', 
            }
        }).then(response => {
            setPlayer(response.data.player);
            setLobby(response.data.lobby);
            console.log(response.data);
        })},
        [setPlayer, setLobby],
    );


    return (
        <Modal center>
                <OpenBoxLogo/>
                <div className={styles.btnGroup}>
                <Button child={"CREATE"} onClickEvent={onCreateHandler}/>
                <Button child={"JOIN"}/>
                </div>
        </Modal>
    );
} 

export default Landing; 

