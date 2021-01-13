import React, { createContext, useReducer } from 'react';

//Context tree
export const StateContext = createContext();

//Provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// export const useStateValue = () => useContext(StateContext);