import React from 'react'
import Form from "react-bootstrap/Form";
import logo from "./assets/logo.png"
import { Button } from 'react-bootstrap'
import './login.css'

const Login = () => {
  return (
    <div>
       <div className="main-login">
        <div className='box'>
        <div className="photo">
          <img src={logo} alt="logo" width={100} />
        </div>
        <div className="input">
          <Form className='inform'>
            <Form.Group className="mb-3 m-3" controlId="formGroupEmail">
              <Form.Label >Email: </Form.Label>
              <Form.Control type="mail" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group className="mb-3 m-3" controlId="formGroupPassword">
              <Form.Label>Password: </Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
          </Form>
        </div>
        <div className="button" >
          <Button variant="primary">Login</Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
