import React, { useState } from 'react';
import { useGeneral } from '../contexts/GeneralProvider';

export default function Filters() {
  const { handleFilters, setFilterQty, filters, setFilters } = useGeneral();
  const [filterOptions, setFilterOptions] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  const handleState = ({ target: { name, value } }) => {
    setFilters({ ...filters, [name]: value });
  };

  const submitFilters = (e) => {
    e.preventDefault();
    setFilters({ ...filters });
    setFilterOptions(filterOptions.filter((element) => element !== filters.column));
    setFilterQty(true);
    handleFilters();
  };

  return (
    <div>
      <h1>Filters</h1>
      <form onSubmit={ submitFilters }>
        <select
          data-testid="column-filter"
          name="column"
          onChange={ handleState }
          value={ filters.column }
        >
          {filterOptions.map((e) => (
            <option key={ e } value={ e }>
              {e}
            </option>
          ))}
        </select>

        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ filters.comparison }
          onChange={ handleState }
        >
          <option>maior que</option>
          <option>igual a</option>
          <option>menor que</option>
        </select>

        <input
          data-testid="value-filter"
          type="number"
          name="qty"
          value={ filters.qty }
          onChange={ handleState }
        />

        <button
          type="submit"
          data-testid="button-filter"
        >
          Filter
        </button>
      </form>

    </div>
  );
}
