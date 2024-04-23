// path : dragon/src/page/AddKnight/index.page.jsx

const AddKnightPage = () => {

    return <div className={'formPage page'}>
        <div className="form">
            <input
                type={'text'}
                name={'name'}
                placeholder={'Knight\'s name'}
            />
            <input
                type="text"
                name={'age'}
                placeholder={"Knight's age"}
            />
            <button>Add Knight</button>
        </div>
    </div>
}

export default AddKnightPage