import React, {createContext, ReactNode, useContext, useState} from 'react';

type BackgroundContext = {
  on: boolean;
  handleToggle: () => void;
};

type BackgroundProvider = {
  children: ReactNode;
};

const BackgroundContext = createContext({} as BackgroundContext);

export const BackgroundProvide = ({children}: BackgroundProvider) => {
  const [on, setOn] = useState(false);

  const handleToggle = () => setOn(prev => !prev);

  return (
    <BackgroundContext.Provider value={{on, handleToggle}}>
      {children}
    </BackgroundContext.Provider>
  );
};
export function useBackgroundContext() {
  return useContext(BackgroundContext);
}
