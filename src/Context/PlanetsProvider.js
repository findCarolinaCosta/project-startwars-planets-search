import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';

const Context = createContext();
const { Provider, Consumer } = Context;

const INITIAL_CONTEXT = {
  data: [],
};

function PlanetsProvider({ children }) {
  const [data, setData] = useState(INITIAL_CONTEXT);

  const setDataResponse = async () => {
    setData(await fetchPlanets());
  };

  useEffect(() => {
    setDataResponse();
  }, []);

  const context = {
    data,
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
