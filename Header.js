import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const[signInUser, setSignInUser] = useState({email:'', password:''});

  const history = useHistory();

  const toggleDisplay = () => {
    if(localStorage.getItem('loggedInUser')){
      return(
        <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-md-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/settings">Settings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-us">About us</Link>
          </li>
        </ul>
        <form className="d-flex">
          <button className="btn btn-outline-success" onClick={signOutSubmitHandler} type="button">Sign out</button>
        </form>
      </div>
      );
    }else{
      //No change is needed for the unauthenticated student
      return(
        <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/sign-up">Sign up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-us">About us</Link>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" onChange = {changeHandler} name="email" value={signInUser.email} type="email" placeholder="Email" aria-label="Email" />
          <input className="form-control me-2" onChange = {changeHandler} name="password" value={signInUser.password} type="password" placeholder="Password" aria-label="Password" />
          <button className="btn btn-outline-success" onClick={signInSubmitHandler} type="button">Sign in</button>
        </form>
      </div>
      );
    }
  }
  const changeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      const tempSignIn = {...signInUser};
      tempSignIn[name] = value;
      setSignInUser(tempSignIn);

  }

  const signInSubmitHandler = () => {
    axios.post('http://localhost:8080/login', signInUser)
    .then(response => {
      localStorage.setItem("loggedInUser", JSON.stringify(response.data))
        history.push('/home');
    }).catch(error => {
      console.log("in the future add logic to navigate to an error page")
    });
    
  }
 
  const signOutSubmitHandler = () => {
    console.log('sign out clicked');
    localStorage.clear();
    history.push('/');
  }

  return (
    
<header>
      <div className="mb-5"> 
   <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid"> 
   <a className="navbar-link" href='/'>Vacation Manager Portal</a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    
        
        <span className="navbar-toggler-icon"></span>
        
      </button>
    {toggleDisplay()}
    </div>
  </nav>
  </div>
</header>

  );
}
