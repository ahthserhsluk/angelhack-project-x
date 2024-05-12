"use client"
import React, { createContext, useState } from 'react';

type RequirementType = {
  proposal_title: string;
  details: string;
  price: string;
  delivery_time: string;
  skills: string;
};

type StateContextType = {
  requirements: RequirementType;
  user: string;
};

export const StateContext = createContext<null | StateContextType>(null);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [context, setContext] = useState<StateContextType>({
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
    <StateContext.Provider value={{ context, setContext }}>
      {children}
    </StateContext.Provider>
  );
};