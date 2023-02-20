import React from 'react'
import './SignupForm.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import validation from './Validation'

function SignupForm() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        confirm_password: ''
    })
    const [errors, setErrors] = useState({})

    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
    }

    function handleValidation(e) {
        e.preventDefault()
        setErrors(validation(values))
    }

  return (
    <div className='signup_container w-100 d-flex justify-content-center mt-5'>
        <div className='signup_form mt-5 w-50'>
            <h4>SignUP Form Validation</h4>
            <div className='form mt-3'>
                <form className='border p-3' onSubmit={handleValidation}>
                    <label for="email"><strong>Email:</strong></label>
                    <input type="email" placeholder="Enter Email" value={values.email}
                        name="email" onChange={handleInput} className='form-control' />
                    {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

                    <label for="password" className='mt-2'><strong>Password:</strong></label>
                    <input type="password" placeholder="Enter Password"  value={values.password}
                    name="password" onChange={handleInput} className='form-control'/>
                    {errors.password && <p style={{color: "red"}}>{errors.password}</p>}

                    <label for="confirm_password" className='mt-2'><strong>Confirm Password:</strong></label>
                    <input type="password" placeholder="Enter Confirm Password"  value={values.confirm_password}
                    name="confirm_password" onChange={handleInput}  className='form-control'/>
                    {errors.confirm_password && <p style={{color: "red"}}>{errors.confirm_password}</p>}

                    <div className='mt-3'>
                        <button className='btn btn-danger w-50'>Cancel</button>
                        <button className='btn btn-success w-50'>SignUp</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default SignupForm