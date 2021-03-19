import React from 'react';
import styles from './backdrop.module.scss'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import OpenBoxIcon from '../../../assets/svgs/svgIconLogo/svgIconLogo'
import OpenBoxText from '../../../assets/svgs/svgTextLogo/svgTextLogo'

const Backdrop = (props) => {

  let backdrop =  (
    <Aux>
      <div className={styles.Backdrop}></div>
      <OpenBoxText/>
      <OpenBoxIcon/>
    </Aux>
  )
  
  if(window.location.href.indexOf('lobby') > 0) {
    backdrop = (
    <div className={styles.BackdropLobby}>
      <OpenBoxIcon/>
    </div>
  )}
  
  return (
    <Aux>
      {backdrop}
    </Aux>
  )
}
export default Backdrop;