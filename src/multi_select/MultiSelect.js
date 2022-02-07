import {
  React, useEffect, useRef, useState,
} from 'react';
import Checkbox from './Checkbox';

export default function MultiSelect(
  {
    options, onChange, value, label,
  },
) {
  const options2 = useRef(options);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const temp = {};
  const re = new RegExp(searchValue, 'gi');

  useEffect(() => {
    for (let i = 0; i < options2.current.length; i += 1) {
      options2.current[i].key = i;
      options2.current[i].isChecked = false;
    }
  }, [])

  const handleChange = (e) => {
    if (e.target.checked) {
      options2.current[parseInt(e.target.id, 10)].isChecked = true;
      temp.label = options2.current[parseInt(e.target.id, 10)].label;
      temp.value = e.target.value;
      onChange([...value, temp]);
    } else {
      if (selectAll) {
        setSelectAll(false);
      }
      options2.current[parseInt(e.target.id, 10)].isChecked = false;
      onChange(value.filter((ele) => ele.value !== e.target.value));
    }
  }
  const handleChange2 = (e) => {
    if (e.target.checked) {
      setSelectAll(true);
      options2.current.forEach((element) => {
        element.isChecked = true;
      });
      onChange([...options2.current]);
    } else {
      setSelectAll(false);
      options2.current.forEach((element) => {
        element.isChecked = false;
      });
      onChange([]);
    }
  }
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  }
  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  }

  return (
    <>
      <div className="dropdown-div" onClick={handleDropdown} role="button" tabIndex={0} onKeyPress={1}>
        {
          value.length === 0
            ? 'Select ...'
            : value.map((ele) => (
              <span>
                {ele.label}
                <span>,</span>
              </span>
            ))
        }
      </div>
      <div className={openDropdown ? 'holder-div' : 'holder-div hider'}>
        <div>
          <input className="search" onChange={(e) => { handleSearchChange(e) }} placeholder="Search ..." />
        </div>
        <div className="opt-div">
          <div className={re.test('Select All') ? 'opt-holder' : 'opt-holder hider'}>
            <input type="checkbox" id="Select All" name={label} value="select_all" onClick={(e) => handleChange2(e)} checked={selectAll} />
            <label className="label" htmlFor="Select All">Select All</label>
          </div>
          {
            options2.current.map((opt) => (
              <div className={re.test(opt.label) ? 'opt-holder' : 'opt-holder hider'}>
                <Checkbox option={opt} onChange={handleChange} label={label} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
