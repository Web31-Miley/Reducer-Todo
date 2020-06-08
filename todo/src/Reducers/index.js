export const initialState = {
    id: Date.now(),
    listItem: '',
    todoList: [],
    completed: false
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'INPUT':
            return {
                ...state, 
                listItem: action.value
            }
        case 'ADD_ITEM':
            const newID = Date.now();
            const newItem = {
                    id: newID,
                    item: action.item,
                    completed: false
            }
            const newList = [...state.todoList, newItem]
                return {
                    ...state,
                    todoList: newList
                }
        case 'REMOVE_ITEM':
            const newStateRemove = state.todoList.filter( item => 
                item.id !== action.id
            )
                return {
                    ...state,
                    todoList: newStateRemove
                }
        case "COMPLETE_ITEM":
            const newStateComplete = state.todoList.map( item => 
                `${item.id}` === `${action.id}` ? 
                {...item, completed: !item.completed} : item
            )
            return {
                ...state,
                todoList: newStateComplete
            }
        case 'CLEAR_COMPLETED':
            const newStateClear = state.todoList.filter( item =>
                !item.completed
            )
            return {
                ...state,
                todoList: newStateClear
            }
        default:
            return state
    }
}