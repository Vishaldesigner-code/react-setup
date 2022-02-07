import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


function Registration() {
    const navigate = useNavigate();
    const [field, setFieldData] = useState({
        fname: '',
        lname: '',
        password: '',
        email: '',
        phone: '',
        cname: '',
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
        event.preventDefault();
        alert('form Successfully Submitted')
        localStorage.setItem('userData', JSON.stringify(field))
        navigate("/login");
    }
    return (<>
        <div className="container">
            <div className="registration-form">
                <div className="row my-5 justify-content-center">
                    <div className="col-md-5">
                        <form onSubmit={submitButton}>
                            <div className='text-center'>
                                <h2 className='text-theme pb-3'>Registration</h2>
                            </div>
                            <div className='input-field py-2'>
                                <Form.Control type="text" name='fname' autoComplete='off' value={field.fname} placeholder="First Name" onChange={registraionForm} />
                            </div>
                            <div className='input-field py-2'>
                                <Form.Control type="text" name='lname'  autoComplete='off' value={field.lname} placeholder="Last Name" onChange={registraionForm} />
                            </div>
                            <div className='input-field py-2'>
                                <Form.Control type="email" name='email'  autoComplete='off' value={field.email} placeholder="Email Name" onChange={registraionForm} />
                            </div>
                            <div className='input-field py-2'>
                                <Form.Control type="password" name='password'  autoComplete='off' value={field.password} placeholder="Enter Passwword" onChange={registraionForm} />
                            </div>
                            <div className='input-field py-2'>
                                <Form.Control type="number" name='phone' value={field.phone}  autoComplete='off' placeholder="Phone Name" onChange={registraionForm} />
                            </div>
                            <div className='input-field py-2'>
                                <Form.Control type="text" name='cname' value={field.cname} placeholder="Company Name" onChange={registraionForm} />
                            </div>

                            <div className='text-center'>
                                <Button type='submit' className='btn-lg-primary' size="md">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Registration;
