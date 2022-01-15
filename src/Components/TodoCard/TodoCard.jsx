import React, {useContext} from 'react';
import {types} from "../Context/reducer";
import {TodoListContext} from "../Context/Context";
import TodoItems from "../TodoItems/TodoItems";
import './TodoCard.css'
import closeBtn from './icons8-close (2).svg'

const TodoCard = ({todo}) => {
    const {dispatch} = useContext(TodoListContext)
    const handleDeleteTodoList = (id) => {
        dispatch({type: types.DeleteTodoListItem, payload: {id}})
    }
    const handleAddTodoItems = (id) => {
        const title = prompt('please enter the title')
        dispatch({type: types.AddTodoItems, payload: {todoId: id, title}})
    };

    return (
        <div className='todo' key={todo.id}>
            <img className='deleteCardBtn' src={closeBtn} alt="close Button"
                 onClick={() => handleDeleteTodoList(todo.id)}/>
            <div className={'todoTexts'}>
                <div className="todo_head">
                    <h1>{todo.name}</h1>
                </div>

                <h3>{todo.description}</h3>
                <TodoItems todo={todo}/>
                <div className='addItemBtn'>
                    <button onClick={() => handleAddTodoItems(todo.id)}>
                        {'Add item'}
                    </button>
                </div>
            </div>
        </div>

    )
}

export default TodoCard
