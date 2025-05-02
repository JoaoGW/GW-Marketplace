import { useState, useContext, createContext, ReactNode } from "react";

type SheetFilterContext = {
  showActionsheet: boolean;
  setShowActionsheet: (value: boolean) => void;
}

const SheetFilters = createContext<SheetFilterContext>({} as SheetFilterContext);

export function useSheetFilters(){
  return useContext(SheetFilters);
}

export function SheetFiltersContext({ children }: { children: ReactNode }){
  const [showActionsheet, setShowActionsheet] = useState(false);

  return(
    <SheetFilters.Provider value={{ showActionsheet, setShowActionsheet }}>
      { children }
    </SheetFilters.Provider>
  )
}