import {createContext, useContext} from "react";

const context = createContext()

const ContextProvider = ({children}) => {


    return <context.Provider value={{
        name: 'Paul'
    }}>
        {children}
    </context.Provider>
}

export const usePersonnalContext = () => useContext(context)

export default ContextProvider;