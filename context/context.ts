import React, { createContext, useState } from 'react';

type StateContextType = {
  requirements: {
    proposal_title: string;
    details: string;
    price: string;
    delivery_time: string;
    skills: string;
  };
  user: string;
};

export const StateContext = createContext<null | StateContextType>(null);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [Context, setContext] = useState({
    requirements: {
      proposal_title: '',
      details: '',
      price: '',
      delivery_time: '',
      skills: '',
    },
    user: '',
  });


  return (
    <StateContext.Provider value={Context}>{children}</StateContext.Provider>
  );
};

