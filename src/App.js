import React from 'react';
import './App.css';
import FilterField from './components/FilterField';
import SortField from './components/SortField';
import Table from './components/Table';
import { Provider } from './Context/PlanetsProvider';

function App() {
  return (
    <Provider>
      <FilterField />
      <SortField />
      <Table />
    </Provider>
  );
}

export default App;
