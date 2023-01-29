import React, {createContext, useContext, useState} from "react";


// Context -> exposing
const TranslationContext = createContext(null);
export const useTranslation = () => {
    return useContext(TranslationContext);
};

// Provider -> managing state
const TranslationProvider = ({children}) => {
    const [translation, setTranslation] = useState([]);
    const state = {translation, setTranslation};
    return (
        <TranslationContext.Provider value={state}>
            {children}
        </TranslationContext.Provider>
    );
};

export default TranslationProvider;