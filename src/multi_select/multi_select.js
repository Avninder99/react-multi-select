import { useState } from 'react';

export default function MultiSelect(props) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const temp = {};
  const temp2 = true;
  let re = new RegExp(searchValue,'gi')

  const handleChange = (e) => {
    if(e.target.checked){
      temp.label = e.target.id;
      temp.value = e.target.value;
      props.onChange([...props.value, temp]);
    }else{
      props.onChange(props.value.filter(ele => ele.value != e.target.value));
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
      <div className="dropdown-div" onClick={handleDropdown}>
        hi
      </div>
      <div className={openDropdown ? "holder-div" : "holder-div hider"}>
        <div>
          <input className="search" onChange={e => {handleSearchChange(e)}} />
        </div>
        <div className="opt-div">
            {
              props.options
              .map((opt) => {
                return (
                  <div className={re.test(opt.label) ? "opt-holder" : "opt-holder hider"}>
                    <input 
                      key={opt.label}
                      type="checkbox"
                      id={opt.label}
                      name={props.label}
                      value={opt.value}
                      onClick={(e) => handleChange(e)}
                      />
                    <label for={opt.label}>{opt.label}</label>
                  </div>
                )
              })
            }
        </div>
      </div>
    </>
  );
}
