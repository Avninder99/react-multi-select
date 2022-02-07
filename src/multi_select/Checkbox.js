import React from 'react';

export default function Checkbox(
  {
    option, onChange, label,
  },
) {
  return (
    <>
      <input type="checkbox" id={option.key} name={label} value={option.value} onClick={(e) => onChange(e)} checked={option.isChecked} />
      <label className="label" htmlFor={option.key}>{option.label}</label>
    </>
  );
}
