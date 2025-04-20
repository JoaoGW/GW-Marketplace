import { useState, useContext, createContext, ReactNode } from 'react';

type NavBarContext = {
  currentActive: string;
  setCurrentActive: (value: string) => void;
}

const ActivePage = createContext<NavBarContext>({} as NavBarContext);

export function useNavBar(){
  return useContext(ActivePage);
}

export function NavbarContext({children}: {children: ReactNode}){
  const [currentActive, setCurrentActive] = useState("Home");

  return(
    <ActivePage.Provider value={{ currentActive, setCurrentActive }}>
      {children}
    </ActivePage.Provider>
  )
}