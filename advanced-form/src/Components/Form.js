import React from 'react'
import { Button } from 'reactstrap'
import './form.css'

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
                <h2>Register Here!</h2>
                <div>
                    <span>{errors.first_name}</span>
                    <span>{errors.last_name}</span>
                    <span>{errors.email}</span>
                    <span>{errors.password}</span>
                </div>
            </div>
            <div className='form-group-inputs'>
                <h4>Information</h4>
                <label>First Name&nbsp;
                    <input
                    value={values.first_name}
                    onChange={onInputChange}
                    name='first_name'
                    type='text'
                    />
                </label>
                <label>Last Name&nbsp;
                    <input
                    value={values.last_name}
                    onChange={onInputChange}
                    name='last_name'
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
                <label>Password&nbsp;
                    <input
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='password'
                    />

                </label>
                <label>Terms of Service&nbsp;
                    <input
                    checked={values.term}
                    type='checkbox'
                    onChange={onCheckboxChange}
                    name='term'
                    />

                </label>
            </div>
           <span><Button variant="contained" color='primary' disabled={disabled}>Submit</Button></span>
           <br></br>
        </form>
    )
}