import React from 'react'
import { Button } from 'reactstrap'

export default function Form(props) {
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        errors,
    } = props

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Welcome to our app</h2>

                <Button color='primary' disabled={disabled}>Submit</Button>
                <div>
                    <span>{errors.name}</span>
                    <span>{errors.email}</span>
                    <span>{errors.password}</span>
                </div>
            </div>
            <div className='form-group-inputs'>
                <h4>Information</h4>
                <label>Name&nbsp;
                    <input
                    value={values.name}
                    onChange={onInputChange}
                    name='name'
                    type='text'
                    />
                </label>
                <label>Email&nbsp;
                    <input
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='text'
                    />
                </label>
                <label>Terms of Service&nbsp;
                    <input
                    checked={values.terms}
                    type='checkbox'
                    onChange={onCheckboxChange}
                    name='terms'
                    />

                </label>

            </div>
        </form>
    )
}