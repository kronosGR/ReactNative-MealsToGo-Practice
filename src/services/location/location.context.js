import React, { createContext } from 'react';
import { useState } from 'react';
import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('san francisco');
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    if (!searchKeyword.length) {
      return;
    }

    locationRequest(searchKeyword)
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: () => null, keyword }}>
      {children}
    </LocationContext.Provider>
  );
};
