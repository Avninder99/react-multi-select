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
    { label: 'Bananas', value: 'bananas' },
    { label: 'Mangoes', value: 'mangoes' },
    { label: 'Watermelons', value: 'watermelons' },
    { label: 'Guavas', value: 'guavas' },
    { label: 'Strawberries', value: 'strawberries' },
    { label: 'Dragon Fruit', value: 'dragon fruit' },
    { label: 'Tomatoes', value: 'tomatoes' },
  ];

  const [selected, setSelected] = useState([]);
  console.log("============")
  console.log(selected)
  return (
    <div className="App">
      <div className='show-div'>
        {
          selected.map(selectedFruit => {
            return (
              <div className='show-name'>
                {selectedFruit.label},
              </div>
            )
          })
        }
      </div>
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
