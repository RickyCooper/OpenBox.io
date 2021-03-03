import React from 'react';
import styles from './backdrop.module.css'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import OpenBoxIcon from '../../../assets/svgs/svgIconLogo/svgIconLogo'
import OpenBoxText from '../../../assets/svgs/svgTextLogo/svgTextLogo'

const Backdrop = (props) => {
  return (
    <Aux>
      <div className={styles.Backdrop}></div>;
      <OpenBoxIcon/>
      <OpenBoxText/>
    </Aux>
  )
}
export default Backdrop;