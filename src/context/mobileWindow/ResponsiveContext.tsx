import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type ScreenSizeContext = {
  mobile: boolean;
};

type ResponsiveProvider = {
  children: ReactNode;
};

const ResponsiveContext = createContext({} as ScreenSizeContext);

const detectDevice = () => {
  const width = window.innerWidth;

  if (width <= 768) {
    return true;
  }

  return false;
};

export const ResponsiveProvide = ({children}: ResponsiveProvider) => {
  const [mobile, setMobile] = useState<boolean>(detectDevice());

  const handleResize = () => {
    setMobile(detectDevice());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ResponsiveContext.Provider value={{mobile}}>
      {children}
    </ResponsiveContext.Provider>
  );
};
export function useResponsiveContext() {
  return useContext(ResponsiveContext);
}
