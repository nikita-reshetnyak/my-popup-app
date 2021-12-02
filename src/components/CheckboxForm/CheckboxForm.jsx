import React from "react";
import './CheckboxForm.css'

const CheckboxForm = (props) => {
   return (
      <div className="form-block">
         <div className="form-block-item">
            <input className="form-block-input" id={props.id} type="checkbox" />
            <label htmlFor={props.htmlFor}>{props.tax} рублей <span>в {props.year}-ый год</span></label>

         </div>
      </div>
   )
}
export default CheckboxForm;