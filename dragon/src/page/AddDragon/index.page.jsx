// path : dragon/src/page/AddDragon/index.page.jsx
import './addDragon.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectDragon} from "../../store/selector/index.js";
import {addDragon, setDragonValue} from "../../store/action/index.js";

const AddDragonPage = () => {

    const dragon = useSelector(selectDragon)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const {name, value} = e.target

        if(name === 'age' && String(parseInt(value)).length !== value.length) {
            return
        }

        dispatch(setDragonValue({name,value}))
    }

    const handleSubmit = () => {
        if (dragon.name.trim() === '' || dragon.age <= 0) {
            return;
        }

        dispatch(addDragon())
    }



    return <div className={'formPage page'}>
        <div className="form">
            <input type={'text'} onChange={handleChange} name={'name'} value={dragon.name} placeholder={'Dragon\'s name'} />
            <input type="text" onChange={handleChange} name={'age'} value={dragon.age} placeholder={"Dragon's age"}/>
            <button onClick={handleSubmit}>Add Dragon</button>
        </div>
    </div>
}

export default AddDragonPage