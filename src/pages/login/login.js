import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [field, setFieldData] = useState({
    email: '',
    password: '',
  });

  const registraionForm = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(value);
    setFieldData((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }
  const submitButton = (event) => {
    debugger
    event.preventDefault();
    let value = localStorage.getItem('userData')
    value = JSON.parse(value)
    if (value['email'] == field['email'] && value['password'] == field['password']) {
      navigate("/");
    } else {
      alert("Please enter the valid email")
    }
    console.log(value);
  }
  return (
    <div>
      <div className="container">
        <div className="registration-form">
          <div className="row my-5 justify-content-center">
            <div className="col-md-5">
              <form onSubmit={submitButton}>
                <div className='text-center'>
                  <h2 className='text-theme pb-3'>Login Here</h2>
                </div>
                <div className='input-field py-2'>
                  <Form.Control type="email" name='email' autoComplete='off' value={field.email} placeholder="Email Name" onChange={registraionForm} />
                </div>
                <div className='input-field py-2'>
                  <Form.Control type="password" name='password' autoComplete='off' value={field.password} placeholder="Enter Passwword" onChange={registraionForm} />
                </div>
                <div className='text-center'>
                  <Button type='submit' className='btn-lg-primary' size="md">
                    Login
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
