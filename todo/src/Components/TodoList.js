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
                    <div key = {item.id}>
                        <div onClick={() => dispatch({id: item.id, type: 'COMPLETE_ITEM'})}>
                        <span >{item.completed ? '✔': null}</span>
                        <span key={item.id}> {item.item} </span>
                        <button onClick={() => dispatch({id: item.id, type: 'REMOVE_ITEM'})} >
                            Remove
                        </button>
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