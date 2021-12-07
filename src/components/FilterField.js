import React, { useContext } from 'react';
import { Context } from '../Context/PlanetsProvider';

function FilterField() {
  const { FilterByName, setFilterByName, setIsFiltered } = useContext(Context);

  const handleChange = (target) => {
    setIsFiltered(true);
    setFilterByName(target.value);
  };

  return (
    <div>
      <input
        value={ FilterByName }
        onChange={ ({ target }) => handleChange(target) }
        data-testid="name-filter"
      />
    </div>
  );
}

export default FilterField;
