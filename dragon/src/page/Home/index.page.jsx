// path : dragon/src/page/Home/index.page.jsx
import "./home.scss";

import {useSelector} from "react-redux";
import {selectDragons} from "../../store/selector/index.js";
import ListItem from "../../component/ListItem/index.jsx";

const HomePage = () => {

    const dragons = useSelector(selectDragons)

    return <div className={'page homePage'}>
        <div>
            <h2>Dragon's list</h2>
            <div className="listContainer dragonList">
                {
                    dragons.length > 0 ?
                        dragons.map(dragon => <ListItem key={dragon.id} item={dragon}/>)
                        :
                        <span>Oups, no dragon listed</span>
                }
            </div>
        </div>
        <div>
            <h2>Knight's list</h2>
            <div className="listContainer knightList">
                {
                    // List goes here
                }
                <span>Oups, no knight listed</span>
            </div>
        </div>
    </div>
}

export default HomePage