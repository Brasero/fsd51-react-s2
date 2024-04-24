// path : toolkit/src/page/AddTask/index.page.jsx

const AddTaskPage = () => {

    return <div className={'page'}>
        <h5>Add a task</h5>
        <form style={{display: "flex", flexDirection: "column", gap: 15}}>
            <input type={'text'} name={'title'} placeholder={'Task\'s title'}/>
            <textarea name={"content"} placeholder={"Task's content (optional)"}/>
            <input type={"submit"} value={'Add task'} />
        </form>
    </div>
}

export default AddTaskPage