import React from 'react';
import { useGeneral } from '../contexts/GeneralProvider';

export default function SearchName() {
  const { filters, setFilters } = useGeneral();
  const inputChange = (e) => {
    setFilters({ ...filters, searchTerm: e.target.value });
  };
  return (
    <input
      onChange={ inputChange }
      value={ filters.searchTerm }
      data-testid="name-filter"
      type="text"
      placeholder="Search"
    />
  );
}
