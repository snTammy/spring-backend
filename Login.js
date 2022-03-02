import React, { useRef, useState } from "react"
import { Form, Button, Card } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import axios from 'axios';


export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    //Declare state variable
    const[signInUser, setSignInUser] = useState({email:'', password:''});
   
    const history = useHistory()

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempSignIn = {...signInUser};
        tempSignIn[name] = value;
        setSignInUser(tempSignIn);
    }

    const signOutSubmitHandler = () => {
        console.log('sign out clicked');
        localStorage.clear();
        history.push('/');
      }

    const signInSubmitHandler = () => {
        axios.post('http://localhost:8080/login', signInUser)
        .then(response => {
          localStorage.setItem("loggedInUser", JSON.stringify(response.data))
            history.push('/signup');
        }).catch(error => {
          console.log("in the future add logic to navigate to an error page")
        });
        
      }

  return (
    <>
      <Card>
          <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              <Form className="form-signin">
                <Form.Group id="email">
                    <Form.Label >Email</Form.Label>
                    <Form.Control className="form-control" type="email" onChange={changeHandler} name="email" value={signInUser.email} required />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="form-control" type="password" onChange={changeHandler} name="password" value={signInUser.password} required/>
                </Form.Group>
                  <Button className="w-100 mt-2" onClick={signInSubmitHandler} type="submit">Log In</Button>
              </Form>
          </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
          Need an account? Sign Up <Link className="app-link" to="/">Sign Up</Link> 
      </div>

         
          
    </>
  )
}