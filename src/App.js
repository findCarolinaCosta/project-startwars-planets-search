import React from 'react';
import './App.css';
import FilterField from './components/FilterField';
import LoadingInitial from './components/LoadingInitial';
import SortField from './components/SortField';
import Table from './components/Table';
import { Provider } from './Context/PlanetsProvider';

function App() {
  return (
    <Provider>
      <LoadingInitial />
      <div className="container pb-8">
        <section className="section__header font-bold">
          <FilterField />
          <SortField />
        </section>
        <div className="div__table font-bold bg-white">
          <Table />
        </div>
      </div>
    </Provider>
  );
}

export default App;
