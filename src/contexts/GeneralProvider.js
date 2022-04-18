import React, { useEffect, useState, useContext } from 'react';
import propTypes from 'prop-types';
import generalContext from './generalContext';
import fetchApi from '../services/api';

const GeneralProvider = ({ children }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const apiResults = await fetchApi().then((data) => data.results);
      setResults(apiResults);
    };
    getData();
  }, []);

  const data = {
    results,
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
