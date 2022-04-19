import React, { useEffect, useState, useContext } from 'react';
import propTypes from 'prop-types';
import generalContext from './generalContext';
import fetchApi from '../services/api';

const GeneralProvider = ({ children }) => {
  const [allResults, setAllResults] = useState([]);
  const [filters, setFilters] = useState({
    comparison: 'maior que', column: 'population', qty: '0', searchTerm: '' });
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [filterQty, setFilterQty] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const apiResults = await fetchApi().then((data) => data.results);
      setAllResults(apiResults); setResults(apiResults);
    };
    getData();
  }, []);

  const handleFilters = () => {
    const { comparison, column, qty, searchTerm } = filters;
    const cases = {
      'maior que': () => setResults((!filterQty ? allResults : filteredResults)
        .filter((e) => +e[column] > +qty
      && e.name.toLowerCase().includes(searchTerm.toLowerCase()))),
      'menor que': () => setResults((!filterQty ? allResults : filteredResults)
        .filter((e) => +e[column] < +qty
      && e.name.toLowerCase().includes(searchTerm.toLowerCase()))),
      'igual a': () => setResults((!filterQty ? allResults : filteredResults)
        .filter((e) => +e[column] === +qty
      && e.name.toLowerCase().includes(searchTerm.toLowerCase()))),
    };
    return cases[comparison]
      ? cases[comparison]()
      : setResults(allResults.filter((e) => e.name.toLowerCase()
        .includes(searchTerm.toLowerCase())));
  };

  useEffect(() => {
    setFilteredResults(results);
  }, [results]);

  useEffect(() => {
    handleFilters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.searchTerm]);

  const data = {
    results,
    filteredResults,
    filters,
    setFilters,
    setFilterQty,
    handleFilters,
  };

  return (
    <generalContext.Provider value={ data }>
      {children}
    </generalContext.Provider>
  );
};

export const useGeneral = () => useContext(generalContext);

GeneralProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default GeneralProvider;
