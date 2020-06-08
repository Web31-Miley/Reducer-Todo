import React from 'react';

const Form = props => {
    const {state, dispatch} = props;
    const resetForm = () => {
        dispatch({
            type: 'INPUT',
            value: ''
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        const value = e.target[0].value;
        !!value && dispatch({
            item: `${value}`,
            type: 'ADD_ITEM'
        })
        resetForm()
    }
    const handleChange = e => {
        dispatch({
            type: 'INPUT', value: e.target.value
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='item'
                value={state.listItem || ''}
                onChange={handleChange}
                placeholder='Enter a task'
            />
            <button> Submit </button>
        </form>
    )
}
export default Form;