import React, {useContext} from "react";
import {types} from "../Context/reducer";
import {TodoListContext} from "../Context/Context";
import Checkbox from "../CheckBox/CheckBox";
import './TodoItems.css'
import closeBtn from '../TodoCard/icons8-close (2).svg'
import editBtn from './icons8-edit.svg'

const TodoItems = ({todo}) => {
    const {dispatch} = useContext(TodoListContext)

    const handleUpdateTodoItemsStatus = (todoId, itemId, e) => {
        dispatch({type: types.UpdateTodoItemStatus, payload: {todoId, itemId, checked: e.target.checked}})
    }

    const handleDeleteTodoItemStatus = (itemId, todoId) => {
        dispatch({type: types.DeleteTodoItemStatus, payload: {itemId, todoId}})
    };

    const HandleEditTodoItemStatus = (itemId, todoId) => {
        let title = prompt('enter new title to replace old one');
        dispatch({type: types.EditTodoItemStatus, payload: {itemId, todoId , title}})
    };

    return (
        <dl className='items'>
            {todo.items.map(item => (
                <dt className='itemRow' key={`${todo.id} + ${item.id}`}>
                    <div className='itemBtns'>
                        <img className='closeItemBtn' src={closeBtn} alt="close Button"
                             onClick={() => handleDeleteTodoItemStatus(item.id, todo.id)}
                        />
                        <img className='editItemBtn' src={editBtn} alt="edit Button"
                             onClick={() => HandleEditTodoItemStatus(item.id, todo.id)}
                        />
                    </div>
                    <Checkbox
                        onChange={(e) => handleUpdateTodoItemsStatus(todo.id, item.id, e)}
                        checked={item.status}
                        id={`${todo.id} + ${item.id}`}
                        label={item.title}
                    />

                </dt>
            ))}
        </dl>
    )
}

export default TodoItems