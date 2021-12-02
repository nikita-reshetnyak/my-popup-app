import React from "react";
import './ButtonCounter.css'

const ButtonCounter = (props) => {
   return (
      <button className='popup-form__btn' onClick={props.getInputValue} >Рассчитать</button>
   )
}
export default ButtonCounter;