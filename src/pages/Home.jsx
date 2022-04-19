import React from 'react';
import Table from '../components/Table';
import SearchName from '../components/SearchName';
import Filters from '../components/Filters';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <SearchName />
      <Filters />
      <Table />
    </div>
  );
}
