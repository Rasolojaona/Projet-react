import { useState } from 'react';

export default function NewTodoForm(){

    const [newItem, setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault()


       
        
        setNewItem("")
    }

    return(
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="item" >New item</label>
                <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" className="w-20" />
            </div>
            <button className="btn btn-primary mt-3 w-25">Add</button>
        </form>
    )
}