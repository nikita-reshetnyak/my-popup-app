import React, { useState } from "react";
import ButtonCounter from "../ButtonCounter/ButtonCounter";
import CheckboxForm from "../CheckboxForm/CheckboxForm";
import './Popup.css'
import icon from './popup-icons/Vector.png'


const Popup = (props) => {


   const [array, setArray] = useState([]);
   const [actveClass, setActiveClass] = useState(false)
   const [activeBtn, setActiveBtn] = useState(true);

   const closePopup = () => {
      props.setDisabled(false)
      setActiveClass(false)
   }
   const inputRef = React.createRef();

   const countTax = (value) => {
      let max = 260000;
      let yearTax = (value * 12) * 0.13;
      let wholeNumber = parseInt(max / yearTax);
      let remainder = max - yearTax * wholeNumber;
      let arr = Array(wholeNumber).fill(yearTax);
      if (remainder !== 0) {
         arr.push(remainder);
         setArray(arr);
      }
      setActiveClass(true);
   }

   const getData = (value, e) => {
      e.preventDefault();
      countTax(value);
   }

   let newArray = array.map((item, index) => {
      return (
         <CheckboxForm
            key={index}
            tax={item}
            id={index}
            year={index + 1}
            htmlFor={index}
         />
      )
   })

   return (
      <div className={props.disabled ? "popup active" : "popup "} onClick={closePopup}>
         <div className="popup-content" onClick={(e) => e.stopPropagation()} >
            <div className="btn-close" onClick={closePopup}>
               <img src={icon} alt="" />
            </div>
            <div className="popup__block-text">
               <h3>Налоговый вычет</h3>
               <p>Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>
            </div>

            <div className="popup__form">
               <form>
                  <h4>Ваша зарплата в месяц</h4>
                  <input className="form-input" type="text" placeholder="Введите данные" ref={inputRef} />
                  <ButtonCounter
                     getInputValue={(e) => getData(inputRef.current.value, e)}
                  />
               </form>
            </div>
            <div className={actveClass === false ? "form-down" : "form-down active"} >
               <h4>Итого можете внести в качестве досрочных:</h4>
               {newArray}
            </div>

            <div className="popup__choise-block">
               <h4>Что уменьшаем?</h4>
               <div className="popup__choise-block-btns">
                  <div className={activeBtn ? "popup__choise-block-btn active" : "popup__choise-block-btn "} onClick={() => setActiveBtn(!activeBtn)}>Платеж</div>
                  <div className="popup__choise-block-btn">Срок</div>
               </div>
            </div>
            <div className="popup-button">
               <button>Добавить</button>
            </div>
         </div>
      </div>
   )
}
export default Popup;