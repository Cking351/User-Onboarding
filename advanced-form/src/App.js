import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import 'fontsource-roboto';
import './App.css';

import Form from './Components/Form'
import formSchema from './Components/formSchema'
import axios from 'axios'
import * as Yup from 'yup'
import User from './Components/User'


const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  // CHECKBOX //
  term: false
}
const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: ''
}
const initialUsers = []
const initialDisabled = true

export default function App() {
  const [newUsers, setNewUsers] = useState(initialUsers)
 	const [formValues, setFormValues] = useState(initialFormValues)
 	const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const serverUrl = 'https://reqres.in/api/users'
   
  const getUser = () => {
    axios.get(serverUrl)
    .then(response => {
      setNewUsers(response.data.data)
      // console.log(response.data)
    })
    .catch(error => {
      debugger
    })
  }
  const postNewUser = props => {
    axios.post(serverUrl, props)
    .then(response => {
      setNewUsers([...newUsers, response.data])
    })
    .catch(error => {
      debugger
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }
  const onInputChange = evt => {
    // const name = evt.target.name
    // const value = evt.target.value
    const { name, value } = evt.target

    Yup
      .reach(formSchema, name)

      .validate(value)

      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
   

      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0] 
        })
      })

    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const onCheckboxChange = event => {
    const {name, checked} = event.target
    setFormValues({
      ...formValues, 
      [name]: checked,
    })
  }
 
  const onSubmit = event => {
    event.preventDefault()

    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    postNewUser(newUser)
  }



  // Time for the useEffect! //
  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return(
  <div maxWidth="sm" className="App">
        <header className="App-header">
          <h1>Student Onboarding</h1>
        </header>
          <Form
          values={formValues}
          onInputChange={onInputChange}
          onCheckboxChange={onCheckboxChange}
          onSubmit={onSubmit}
          disabled={disabled}
          errors={formErrors}
          />
          {
            newUsers.map(user => {
              return (
                <User key={user.id} details={user} />
              )
            })
          }
  </div>
  )
}  
