import React, { useRef, useState } from "react"
import Header from '../header/Header';
import { Form, Button, Card } from "react-bootstrap"
import Login from '../login/Login';
import { Link, useHistory } from "react-router-dom"
import axios from 'axios';

export default function ThankYou() {
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
  
      const signInSubmitHandler = (event) => {
          event.preventDefault();
          axios.post('http://localhost:8080/login', signInUser)
          .then(response => {
            localStorage.setItem("loggedInUser", JSON.stringify(response.data))
              history.push('/home');
          }).catch(error => {
            console.log("in the future add logic to navigate to an error page")
          });
          
        }
  
  return(
    <>
      <div>
        <h2 className='h3 mb-3 font-weight-normal text-center'>Thank you for registering!</h2>
        <br></br>
        <Card>
          <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              <Form onSubmit={signInSubmitHandler}>
                <Form.Group id="email">
                    <Form.Label >Email</Form.Label>
                    <Form.Control className="form-control" type="email" onChange={changeHandler} name="email" value={signInUser.email} required />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="form-control" type="password" onChange={changeHandler} name="password" value={signInUser.password} required/>
                </Form.Group>
                  <Button className="w-100 mt-2" type="submit">Log In</Button>
              </Form>
          </Card.Body>
      </Card>
           
      </div>
          
    </>
      
  ); 
}
