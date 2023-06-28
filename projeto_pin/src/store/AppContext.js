import React, { Children, Component }  from 'react';
import { createContext, useContext, useReducer } from "react"
import { reducer } from './reducer';

export const Context = createContext({});

export const useAppContext = () => useContext
(Context);


export const AppContext = ({children, inicialState}) => {
    const [ state, dispatch ] = useReducer(reducer,inicialState)
    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}