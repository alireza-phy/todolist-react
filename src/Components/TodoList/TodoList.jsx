import './TodoList.Style.css'
import {useContext} from 'react'
import {types} from "../Context/reducer";
import {TodoListContext} from "../Context/Context";
import TodoCard from "../TodoCard/TodoCard";

 function TodoList() {
     const {todoList, dispatch} = useContext(TodoListContext);

     const handleAddTodoList = () => {
         const name = prompt('please enter the title')
         const description = prompt('please enter the description')
         dispatch({type: types.addTodoListItem, payload: {name, description}})
     };

     return (
         <div className={'container'}>
             <h1 className='header'> {'TODO LIST'} </h1>
             <h3> Manage your tasks , Clear your mind </h3>
         <div className="TodoList">
             {todoList.map((todo) => (
                 <TodoCard todo={todo} key={todo.id}/>
             ))}
             <div>
                 <button className='creatTodoBtn' onClick={handleAddTodoList}>
                     {"create todo"}
                 </button>
             </div>
         </div>

         </div>
     )
 }
export default TodoList;
