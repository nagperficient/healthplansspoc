// UserDataContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

export const UserDataContext = createContext();

export const useUserData = () => useContext(UserDataContext);

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const stored = localStorage.getItem('userData');
    return stored ? JSON.parse(stored) : { profile: null, plans: [], planDetails: [] };
  });

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  const updateUserData = (key, value) => {
    setUserData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <UserDataContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
