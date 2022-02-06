import { useState } from 'react';
import MultiSelect from './multi_select/multi_select';
import './App.css';

function App() {
  const options = [
    { label: 'Apples', value: 'apples' },
    { label: 'Oranges', value: 'oranges' },
    { label: 'Pineapples', value: 'pineapples' },
    { label: 'Grapes', value: 'grapes' },
    { label: 'Kiwis', value: 'kiwis' },
  ];

  const [selected, setSelected] = useState([]);
  console.log(selected)
  return (
    <div className="App">
      <MultiSelect
        options={options}
        onChange={setSelected}
        value={selected}
        label="fruits"
      />
    </div>
  );
}

export default App;
