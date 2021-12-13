import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';

// Provider, Consumer, Context "global" no mesmo arquivo, porque estão relacionados e melhora a manipulação

const Context = createContext();
const { Provider, Consumer } = Context;

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filtered, setFiltered] = useState(false);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [order, setOrder] = useState({});

  const setDataResponse = async () => {
    setData(await fetchPlanets());
  };

  useEffect(() => {
    setDataResponse();
  }, []);

  const context = {
    data,
    filterByName,
    setFilterByName,
    filtered,
    setFiltered,
    filterByNumericValues,
    setFilterByNumericValues,
    order,
    setOrder,
  };

  return (
    <Provider value={ context }>
      {children}
    </Provider>
  );
}

export { PlanetsProvider as Provider, Consumer, Context };

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
