import { createContext, useContext, useReducer } from "react";

const TheamContext = createContext();

const theamReducer = (state, action) => {
    switch (action.type) {
        case "theam":
            return { ...state, isDark: !state.isDark }; // Fix: state.isdark → state.isDark
        case "fontSize":
            return { ...state, fontSize: action.payload };
        default:
            return state;
    }
};

const initialState = {
    isDark: false,
    fontSize: "medium"
};

export const TheamProvider = ({ children }) => { // Fix: Children → children
    const [state, dispatch] = useReducer(theamReducer, initialState);
    return (
        <TheamContext.Provider value={{ state, dispatch }}> {/* Fix: TheamProvider.Provider → TheamContext.Provider */}
            {children}
        </TheamContext.Provider>
    );
};

export const useTheam = () => {
    const context = useContext(TheamContext);
    if (!context) {
        throw new Error("useTheam must be used within TheamProvider"); // Fix: clearer error message
    }
    return context;
};
