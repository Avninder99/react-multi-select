import { useState } from 'react';
import MultiSelect from './multi_select/MultiSelect';
import './App.css';

function App() {
  const options = [
    { label: 'Apples', value: 'apples' },
    { label: 'Oranges', value: 'oranges' },
    { label: 'Pineapples', value: 'pineapples' },
    { label: 'Grapes', value: 'grapes' },
    { label: 'Kiwis', value: 'kiwis' },
    { label: 'Bananas', value: 'bananas' },
    { label: 'Mangoes', value: 'mangoes' },
    { label: 'Watermelons', value: 'watermelons' },
    { label: 'Guavas', value: 'guavas' },
    { label: 'Strawberries', value: 'strawberries' },
    { label: 'Melons', value: 'melons' },
    { label: 'Tomatoes', value: 'tomatoes' },
  ];
  const [selected, setSelected] = useState([]);

  return (
    <div className="App">
      <div className="show-div">
        {
          selected.map((selectedFruit) => (
            <div className="show-name">
              {selectedFruit.label}
            </div>
          ))
        }
      </div>
      <div className="multi-select">
        <MultiSelect
          options={options}
          onChange={setSelected}
          value={selected}
          label="fruits"
        />
      </div>
    </div>
  );
}

export default App;
