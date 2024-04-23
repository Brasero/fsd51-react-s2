// path : dragon/src/page/Home/index.page.jsx

import {useSelector} from "react-redux";
import {selectDragons} from "../../store/selector/index.js";

const HomePage = () => {

    const dragons = useSelector(selectDragons)

    return <div className={'page'}>
        <h2>Dragon's list</h2>
        {
            dragons.length > 0 ?
                dragons.map(dragon => <div key={dragon.id}>{dragon.name} || {dragon.age}</div>)
                :
                <span>Oups, no dragon listed</span>
        }
    </div>
}

export default HomePage