import React, {createContext, ReactNode, useContext, useState} from 'react';

type BackgroundContext = {
  background: boolean;
  handleToggle: () => void;
};

type BackgroundProvider = {
  children: ReactNode;
};

const BackgroundContext = createContext({} as BackgroundContext);

export const BackgroundProvide = ({children}: BackgroundProvider) => {
  const [background, setBackground] = useState(false);

  const handleToggle = () => setBackground(prev => !prev);

  return (
    <BackgroundContext.Provider value={{background, handleToggle}}>
      {children}
    </BackgroundContext.Provider>
  );
};
export function useBackgroundContext() {
  return useContext(BackgroundContext);
}
