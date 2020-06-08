import React, {useReducer} from 'react';
import {initialState, reducer} from '../Reducers/index';
import Form from './Form';

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <>
            Hey there
            <Form state={state} dispatch={dispatch}/>
            {state.todoList.map( item => {
                return (
                    <div onClick={() => dispatch({id: item.id, type: 'REMOVE_ITEM'})} key = {item.id}>
                        <div>
                        <span>{item.completed ? '✔': null}</span>
                        <span>{item.item}</span>
                        </div>
                    </div>
                )
            })}
            <button onClick = {() => dispatch({ type: 'CLEAR_COMPLETED'})}>
                Clear Completed
            </button>
        </>
    )
}
export default TodoList;