import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

 const SignUp = () => {
 const history = useHistory();
 const[user, setUser] = useState(
     {
         firstName:'',
         lastName:'',
         age:'',
         telephone:'',
         email:'',
         password:'',
         address:{
             street:'',
             city:'',
             state:'',
             zip:''
         }
     }
 )
 const signUpSubmitHandler = () => {
  axios.post('http://localhost:8080/saveUser',user)
  .then(response => {
      history.push('/thank-you');
  }).catch(error => {
      console.log("in the future add logic to navigate to an error page")
  });
}
 const userChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    const tempUser = {...user};
    tempUser[name] = value;
    setUser(tempUser);
    
 }

 const addressChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    const tempUser = {...user};
    tempUser.address[name ] = value;
    setUser(tempUser);
    
}
  return (
  <div className="sign-up-container container">
      <form className="row g-3">
  <h2> Sign up for an account</h2>
<div className="col-md-6">
    <label for="inputFirstName" className="form-label">First Name</label>
    <input type="text" onChange={userChangeHandler} name="firstName" value={user.firstName} className="form-control" id="inputFirstName" />
  </div>
  <div className="col-md-6">
    <label for="inputLastName" className="form-label">Last Name</label>
    <input type="text" onChange={userChangeHandler} name="lastName" value={user.lastName}  className="form-control" id="inputLastName" />
  </div>

  <div className="col-md-6">
    <label for="inputTelephone" className="form-label">Telephone</label>
    <input type="text" onChange={userChangeHandler} name="telephone" value={user.telephone} className="form-control" id="inputTelephone" />
  </div>

  <div className="col-md-6">
    <label for="inputEmail" className="form-label">Email</label>
    <input type="email" onChange={userChangeHandler} name="email" value={user.email}  className="form-control" id="inputEmail" />
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" onChange={userChangeHandler} name="password" value={user.password} className="form-control" id="inputPassword4" />
  </div>
  
    <div className="d-grid gap-2 ">
      <button className="bg-dark btn btn-outline-success" onClick={signUpSubmitHandler} type="button">Sign up</button>
</div>
</form>

  </div>
  );
}
export default SignUp;
