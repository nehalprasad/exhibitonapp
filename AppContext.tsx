import React, { createContext, useContext, useState, ReactNode } from 'react';

type AppState = {
  AccessToken: string | null;
  Role : string | null;
  Name : string | null;
  Email : string | null;
  UserId : number | null;
};

const AppContext = createContext<{ state: AppState; setState: React.Dispatch<React.SetStateAction<AppState>> } | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>({
    AccessToken: null,
    Role : null,
    Name : null,
    Email : null,
    UserId: null,
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
