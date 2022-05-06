import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: []
};

const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const delTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    };

    const addTransaction = (transObj) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transObj
        });
    };

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            delTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
};

export { GlobalContext, GlobalProvider };