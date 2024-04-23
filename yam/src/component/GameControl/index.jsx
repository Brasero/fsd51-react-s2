// path: yam/src/component/GameControl/index.jsx
import {useGameContext} from "../../context/GameContext.jsx";

const GameControl = () => {

    const {state, dispatch} = useGameContext()

    const handleChange = (e) => {
        const {value} = e.target

        if (isNaN(parseInt(value)) || String(parseInt(value)).length != value.length ) {
            return;
        }

        dispatch({
            type: 'SET_ROLLS',
            payload: value
        })
    }

    const roll = () => {
        dispatch({
            type: 'ROLL'
        })
    }

    return (
        <div>
            <input
                type={"text"}
                value={state.rolls}
                placeholder={'Number of roll per experience'}
                onChange={handleChange}
            />
            <button onClick={roll}>Roll</button>
        </div>
    )
}

export default GameControl