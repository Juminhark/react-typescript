import React from 'react';
import PokemonSearch from './components/PokemonSearch';
import { TextField } from './components/TextField';
import { Counter } from './components/Counter';
import './App.css';

// props
// hooks
// render props

const App: React.FC = () => {
  return (
    <div className='App'>
      <PokemonSearch name='John Doe' numberOfPokemons={5} />
      <TextField text='hello world' person={{ firstName: '', lastName: '' }} />
      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
};

export default App;
