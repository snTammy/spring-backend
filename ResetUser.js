import React, { useState } from "react"
import { Form, Button, Card } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import axios from 'axios'
export default function ResetUser() {


          const[signInUser, setSignInUser] = useState({passwordConfirm:'',email:'', password:''});
   
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
              const user = JSON.parse(localStorage.getItem("loggedInUser"));
              console.log(user)
              axios.put(`http://localhost:8080/users/${user.id}`, signInUser)
              .then(response => {
                    history.push('/home');
              }).catch(error => {
                console.log("in the future add logic to navigate to an error page")
              });
              
            }
  return (
    <>
      <Card>
          <Card.Body>
              <h2 className="text-center mb-4">Reset Password</h2>
              <Form onSubmit={signInSubmitHandler}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={changeHandler} value={signInUser.email} required ></Form.Control>
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={changeHandler} value={signInUser.password} />
                </Form.Group>
                <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" name="passwordConfirm" onChange={changeHandler} value={signInUser.passwordConfirm} />
                </Form.Group>
                  <Button className="w-100 mt-2" type="submit">Update Password</Button>
              </Form>
          </Card.Body>
      </Card>

         
          
    </>
  )
}