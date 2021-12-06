import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();
const { Provider, Consumer } = Context;

const INITIAL_CONTEXT = {
  data,
};

function PlanetsProvider({ children }) {
  const [data, setData] = useState(INITIAL_CONTEXT);
  const context = {
    data,
    setData,
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
