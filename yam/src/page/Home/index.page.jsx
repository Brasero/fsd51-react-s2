// path : yam/src/page/Home/index.page.jsx

import GameControl from "../../component/GameControl/index.jsx";
import {useGameContext} from "../../context/GameContext.jsx";
import {Link} from "react-router-dom";

const HomePage = () => {

    const {state} = useGameContext()

    return <div>
        <GameControl />
        {
            state.isResult ?
                <Link to={'/stats'}>Stats</Link> : ''
        }
    </div>
}

export default HomePage