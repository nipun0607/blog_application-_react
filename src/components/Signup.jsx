import React, { useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const signUp =()=>{

  const authCtx=useAuth()
  console.log(authCtx);
  const emailRef = useRef()
const passwordRef = useRef()
const passwordConfirmRef = useRef()
// Import the signup function we defined in AuthContext.js
// const { signup } = useAuth()
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
// const history = useHistory() 
const handleSumbit=async(e)=>{
  e.preventDefault();
  setError("");
  console.log(passwordRef.current.value,passwordConfirmRef.current.value);
  if(passwordRef.current.value !== passwordConfirmRef.current.value){
    alert(setError('Password and confirm password donot match'))
    return;
  }
  try{
   const currentUser= await authCtx.signUp(
    emailRef.current.value,
    passwordRef.current.value,
    authCtx.setCurrentUser(currentUser)
    );
    alert("Registeration Successful,Please login to continue  ")
   console.log(response);
  }
  catch (err){
   console.error(err)
  }

 }
    return (
        <>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSumbit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
      Already have an account? <Link to="/login">Log In</Link>
        </div>
        </> 
    )
};

export default signUp