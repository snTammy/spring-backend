import React, {useState} from 'react';
import axios from 'axios';
import { Route, Link, useHistory } from 'react-router-dom';

export default function AddressEdit() {
  
    const history = useHistory();
    const[property, setProperty] = useState(
        {    
          nickname:'',
          address:{     
             street:'',
             city:'',
             state:'',
             zip:''
            }
        }
    )


    const signUpSubmitHandler = () => {
        //need to do this by id
        axios.post('http://localhost:8080/saveProperty', property)
        .then(response => {
            history.push('/home/property');
        }).catch(error => {
            console.log("in the future add logic to navigate to an error page")
        });
      }
       

       const addressChangeHandler = (event) =>{
          const name = event.target.name;
          const value = event.target.value;
          const tempAddress = {...property};
          tempAddress.address[name ] = value;
          setProperty(tempAddress);
          
      }

      const nicknameChangeHandler = (event) =>{
        const nickname = event.target.value;
        setProperty({...property,nickname})
      }
      
    return (
    <div className='sign-up-container container'>
        <h2>Add a new property</h2>
        <form className="row g-3">
        <div className="col-12">
    <label for="inputStreet" className="form-label">Nickname</label>
    <input type="text" onChange={nicknameChangeHandler} name="nickname" value={property.nickname} className="form-control" id="inputNickname" />
  </div>
    <div className="col-12">
    <label for="inputStreet" className="form-label">Street</label>
    <input type="text" onChange={addressChangeHandler} name="street" value={property.address.street} className="form-control" id="inputStreet" placeholder="1234 Main St" />
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" onChange={addressChangeHandler} name="city" value={property.address.city} className="form-control" id="inputCity" />
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" onChange={addressChangeHandler} name="state" value={property.address.state} className="form-select">
      <option selected>Choose...</option>
      <option value="MO">MO</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" onChange={addressChangeHandler} name="zip" value={property.address.zip} className="form-control" id="inputZip" />
  </div>
    <div className="d-grid gap-2 ">
      <button className="bg-dark btn btn-outline-success" onClick={signUpSubmitHandler} type="button">Update Address</button>
</div>
        </form>
    
    </div>
  )
}
