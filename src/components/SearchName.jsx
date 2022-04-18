import React from 'react';
import { useGeneral } from '../contexts/GeneralProvider';

export default function SearchName() {
  const { handleSearch } = useGeneral();
  return (
    <input
      onChange={ handleSearch }
      data-testid="name-filter"
      type="text"
      placeholder="Search"
    />
  );
}
