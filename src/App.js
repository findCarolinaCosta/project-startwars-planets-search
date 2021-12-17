import React from 'react';
import './App.css';
import FilterField from './components/FilterField';
import SortField from './components/SortField';
import Table from './components/Table';
import { Provider } from './Context/PlanetsProvider';

function App() {
  return (
    <Provider>
      <section className="section__header font-bold">
        <FilterField />
        <SortField />
      </section>
      <div className="div__table font-bold">
        <Table />
      </div>
    </Provider>
  );
}

export default App;
