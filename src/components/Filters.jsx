import React from 'react';
import { useGeneral } from '../contexts/GeneralProvider';

export default function Filters() {
  const { handleFilters, setFilterQty, filters, setFilters } = useGeneral();

  const handleState = ({ target: { name, value } }) => {
    setFilters({ ...filters, [name]: value });
  };

  const submitFilters = (e) => {
    e.preventDefault();
    setFilters({ ...filters });
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
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
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
