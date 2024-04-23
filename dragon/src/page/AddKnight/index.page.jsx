// path : dragon/src/page/AddKnight/index.page.jsx

import {useDispatch, useSelector} from "react-redux";
import {selectKnight} from "../../store/selector/index.js";
import {addKnight, setKnightValue} from "../../store/action/index.js";
import toast from "react-hot-toast";

const AddKnightPage = () => {

    const knight = useSelector(selectKnight)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const {name, value} = e.target

        if (name === 'age' && String(parseInt(value)).length !== value.length) {
            return
        }

        dispatch(setKnightValue({name, value}))
    }

    const handleSubmit = () => {
        if (knight.name.trim() === '' || knight.age <= 0 || knight.age > 100) {
            if (knight.name.trim() === '') {
                toast.error('Please enter a name')
            }
            if (knight.age <= 0 || knight.age > 100) {
                toast.error('Please enter a valid age')
            }
            return;
        }
        dispatch(addKnight())
        toast.success("Knight added successfully")
    }


    return <div className={'formPage page'}>
        <div className="form">
            <input
                type={'text'}
                name={'name'}
                placeholder={'Knight\'s name'}
                value={knight.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name={'age'}
                placeholder={"Knight's age"}
                value={knight.age}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Add Knight</button>
        </div>
    </div>
}

export default AddKnightPage