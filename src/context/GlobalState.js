import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: []
};

const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const delTransactions = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    };

    const addTransactions = (transObj) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transObj
        });
    };

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            delTransactions,
            addTransactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
};

export { GlobalContext, GlobalProvider };