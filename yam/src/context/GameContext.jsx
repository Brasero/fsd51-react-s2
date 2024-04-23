import {createContext, useContext} from "react";
import useGameReducer from "../reducer/gameReducer.jsx";

const gameContext = createContext()

const GameContextProvider = ({children}) => {

    const [state, dispatch] = useGameReducer()

    return <gameContext.Provider value={{state, dispatch}}>
        {children}
    </gameContext.Provider>
}

export const useGameContext = () => useContext(gameContext)

export default GameContextProvider;