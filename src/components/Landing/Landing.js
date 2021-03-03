import React from 'react';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import OpenBoxLogo from '../../assets/svgs/svgIconLogo/svgIconLanding'

const Landing = () => {
    return (
        <Modal>
                <OpenBoxLogo/>
                <Button child={"CREATE"}/>
                <Button child={"JOIN"}/>
        </Modal>
    );
} 

export default Landing; 