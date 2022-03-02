import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, Route, useHistory } from 'react-router-dom'
import AddressEdit from '../../AddressEdit';

export default function Property() {
  const [properties, setProperties] = useState([]);
  const history = useHistory();

  useEffect(() => {

    axios.get('http://localhost:8080/findAllProperties')
      .then(response => {
        setProperties(response.data)
      }).catch(error => {
        console.log("in the future add logic to navigate to an error page")
      });

  }, []
    //This argument allows a render when this variable
    //updates.  Since we only want to call this function once
    //when the component loads, there's no need to add a tracking
    //variable. 
  );

  const editClickHandler = () => {
    <Route path="/home/property/addressEdit" component={AddressEdit}/>
  }

  const deleteClickHandler = (id) => {
    axios.delete(`http://localhost:8080/deleteProperty/${id}`)
    .then(response => {
      setProperties(properties.filter((prop) => { return prop.id != id}))

    }).catch(error => {
      console.log("in the future add logic to navigate to an error page")
    });
  }
  return (
  <>
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {properties.map(function (property) {
          return (
            <div className="col" key={property.nickname}>
              <div className="card shadow-sm">
                <img src={property.imgURL}></img>

                
                <div className="card-body">
                  <p className="card-text">Nickname: {property.nickname} </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">

                      <button type="button" onClick={()=> history.push("/addressEdit")}
                              className="btn btn-sm btn-outline-secondary"
                      >
                        <Link className="nav-link" to="/home/property/addressEdit">Edit</Link>
                        
                      </button>
                      
                      <div className="d-grid gap-2 ">
                      <button type="button" onClick={()=>deleteClickHandler(property.id)}
                              className="btn btn-sm btn-outline-secondary">
                              Delete
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          )
        })}
        
        {/*<<<<<<<<Loop stops here>>>>>>>>>>*/}
      </div>
      
    </div>
    
    <div>
     <button type="button" position="sticky" width="100%" float="center"
             className="btn btn-lg btn-outline-secondary "
             onClick={()=> history.push("/addressEdit")}
             >Add property
      </button> 
    </div>
      
  </>
  
  );
}
