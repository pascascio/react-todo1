import React from 'react';

function AddTodoForm(props) {
    function handleAddTodo (event){
        event.preventDefault()
        let todoTitle = event.target.title.value;
        props.onAddTodo(todoTitle)
        console.log(todoTitle)
        event.target.reset();

    }
    return(
        <form onSubmit = {handleAddTodo}>
            <label htmlFor= "todoTitle">Title: </label>
            <input type = "text" id = "todoTitle" name= "title"/>
            <button>Add</button>
        </form>
    );

}

export default AddTodoForm;