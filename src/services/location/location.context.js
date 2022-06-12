import React, { createContext, useState, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword = "Antwerp") => {
    setIsloading(true);
    setKeyword(searchKeyword);
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsloading(false);
        setLocation(result);
      })
      .catch((error) => {
        setIsloading(false);
        setError(error);
      });
  };

  useEffect(() => {
    onSearch();
  }, []);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: () => null,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
