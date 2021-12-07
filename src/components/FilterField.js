import React, { useContext, useState } from 'react';
import { Context } from '../Context/PlanetsProvider';

function FilterField() {
  const { setFilterByName, setIsFiltered } = useContext(Context);
  const [name, setName] = useState('');

  const handleChange = () => {
    setIsFiltered(true);
    setFilterByName({ name });
    setName('');
  };

  return (
    <div>
      <input
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
        data-testid="name-filter"
      />
      <button
        type="button"
        onClick={ handleChange }
      >
        Filtrar

      </button>
    </div>
  );
}

export default FilterField;
