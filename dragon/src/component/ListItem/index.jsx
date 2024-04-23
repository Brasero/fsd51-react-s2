// path: dragon/src/component/ListItem/index.jsx
import './listItem.scss';
const ListItem = ({item}) => {

    return (
        <div className={'listItem'}>
            <span>{item.name}</span>
            <span>{item.age}</span>
        </div>
    )
}

export default ListItem