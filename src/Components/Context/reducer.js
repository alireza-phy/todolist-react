import {makeRandomId} from "../TodoList/data";

function reducer(state, action) {
    const {type, payload} = action
    switch (type) {
        case 'addTodoListItem':
            return ([...state, {
                id: makeRandomId(),
                name: payload.name,
                description: payload.description,
                items: []
            }]);
        case 'DeleteTodoListItem':
            return state.filter(item => item.id !== payload.id);

        case 'DeleteTodoItemStatus':
            return state.map(
                card => card.id === payload.todoId
                    ? {...card, items: card.items.filter(item => item.id !== payload.itemId)}
                    : card);
        case 'EditTodoItemStatus':
            return state.map(
                card => card.id === payload.todoId
                    ? {
                        ...card,
                        items: card.items.map(item =>
                            item.id === payload.itemId ? {
                                ...item,
                                title: payload.title
                            } : item
                        )
                    } : card);

        case 'AddTodoItems' :
            return state.map(item =>
                item.id === payload.todoId
                    ? {
                        ...item, items: [
                            ...item.items,
                            {id: makeRandomId(), title: payload.title, status: false}
                        ]
                    }
                    : item);
        case 'UpdateTodoItemStatus' :
            return state.map(todo =>
                todo.id === payload.todoId
                    ? {
                        ...todo,
                        items: todo.items.map(item =>
                            item.id === payload.itemId
                                ? {...item, status: payload.checked}
                                : item
                        ),
                    } : todo
            );
        default:
            return state;
    }
}

export const types = {
    addTodoListItem: 'addTodoListItem',
    DeleteTodoListItem: 'DeleteTodoListItem',
    AddTodoItems: 'AddTodoItems',
    UpdateTodoItemStatus: 'UpdateTodoItemStatus',
    DeleteTodoItemStatus: 'DeleteTodoItemStatus',
    EditTodoItemStatus: 'EditTodoItemStatus'
};

export default reducer