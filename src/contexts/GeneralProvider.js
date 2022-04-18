import React, { useEffect, useState, useContext } from 'react';
import propTypes from 'prop-types';
import generalContext from './generalContext';
import fetchApi from '../services/api';

const GeneralProvider = ({ children }) => {
  const [allResults, setAllResults] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const apiResults = await fetchApi().then((data) => data.results);
      setAllResults(apiResults); setResults(apiResults);
    };
    getData();
  }, []);

  const handleSearch = (({ target: { value } }) => {
    const searchResults = allResults.filter((e) => e.name.toLowerCase()
      .includes(value.toLowerCase()));
    setResults(searchResults);
  });

  const data = {
    results,
    handleSearch,
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
