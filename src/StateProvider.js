import { createContext, useContext, useReducer } from "react";

// it prepares the data layer
const StateContext = createContext();

// it wraps our App conponent and provide data layer
export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};

// it will pull info from the data layer
export const useStateValue = () => useContext(StateContext);
