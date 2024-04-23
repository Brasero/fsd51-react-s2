// path : dragon/src/page/AddDragon/index.page.jsx
import './addDragon.scss';

const AddDragonPage = () => {

    return <div className={'formPage'}>
        <div className="form">
            <input type={'text'} name={'name'} placeholder={'Dragon\'s name'} />
            <input type="text" name={'age'} placeholder={"Dragon's age"}/>
            <button>Add Dragon</button>
        </div>
    </div>
}

export default AddDragonPage