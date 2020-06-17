import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import formSchema from './Components/formSchema'
import axios from 'axios'
import * as yup from 'yup'


const initialFormValues = {
  name: '',
  email: '',
  password: '',
  // CHECKBOX //
  Terms: false
}
const initialFormErrors = {
  name: '',
  email: '',
  password: ''
}
const initialUsers = []
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUser = () => {
    axios.get(`https://reqres.in/api/users`)
    .then(response => {
      setUsers(response.data)
    })
    .catch(error => {
      debugger
    })
  }

  const postNewUser = newUser => {
    axios.post(`https://reqres.in/api/users`, newUser)
    .then(response => {
      setUsers([ ...users, response.data ])
    })
    .catch(error => {
      debugger
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

    /// Event Handler ///
  const onInputChange = event => {
    const name = event.target.name
    const value = event.target.value

    yup
      .reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>It's a form</h1>
      </header>
      <div>
        {/* <Form /> */}
      </div>
    </div>
  );
}

export default App;
