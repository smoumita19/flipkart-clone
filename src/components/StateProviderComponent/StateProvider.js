import React, { createContext, useContext, useReducer } from 'react';

//Context tree
export const StateContext = createContext();

//Provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Use this to access data layer
export const useStateValue = () => useContext(StateContext);