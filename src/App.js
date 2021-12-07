import React from 'react';
import './App.css';
import FilterField from './components/FilterField';
import Table from './components/Table';
import { Provider } from './Context/PlanetsProvider';

function App() {
  return (
    <Provider>
      <FilterField />
      <Table />
    </Provider>
  );
}

export default App;
