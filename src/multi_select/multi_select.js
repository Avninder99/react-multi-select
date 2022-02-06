// import { useState } from 'react';

export default function MultiSelect(props) {
  const temp = {};
  const handleChange = (e) => {
    if(e.target.checked){
      temp.label = e.target.id;
      temp.value = e.target.value;
      props.onChange([...props.value, temp]);
    }else{
      props.onChange(props.value.filter(ele => ele.value != e.target.value));
    }
  }

  return (
    <div className="base-div">
        {
          props.options.map((opt) => {
            return (
              <div className='opt-holder'>
                <input type="checkbox" id={opt.label} name={props.label} value={opt.value} onClick={(e) => handleChange(e)}/>
                <label for={opt.label}>{opt.label}</label>
              </div>
            )
          })
        }
    </div>
  );
}
