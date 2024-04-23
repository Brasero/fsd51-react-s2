// path : yam/src/page/Stats/index.page.jsx

import {useGameContext} from "../../context/GameContext.jsx";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const StatsPage = () => {

    const {state} = useGameContext()

    const navigate = useNavigate()

    useEffect(() => {
        if (!state.isResult) {
            navigate('/')
        }
    }, []);

    return <div>
            <div>
                Number of roll : {state.rolls}
            </div>
            <div>
                Number of 6's three of a kind : {state.count}
            </div>
            <div>
                Percent of 6's three of a kind : {(state.count / state.rolls) * 100} %
            </div>
    </div>
}

export default StatsPage