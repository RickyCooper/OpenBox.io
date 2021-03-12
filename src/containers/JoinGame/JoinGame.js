import React, { Component } from 'react';
import styles from './joingame.module.scss';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';

class JoinGame extends Component {

    state = {

    } 

    
    render() {
        return (
            <Modal>
                <h1>Join Game</h1>
                <form>
                    <label>Room Code</label>
                    <input type="text"></input>
                    <label>Name</label>
                    <input type="text"></input>
                </form>
                <Button child={"Enter"} />
            </Modal>
        );
    }
}

export default JoinGame