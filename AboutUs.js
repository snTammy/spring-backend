import React, {useState} from 'react';
import pic1 from '../../images/img4.jpg';
import pic2 from '../../images/img5.jpg';

export default function AboutUs() {
  return(
    <div>
        <div className="w3-content" style={{ 'max-width': '1200px' }}>

        <div className="w3-panel">
            <i className="w3-xlarge fa fa-bars"></i>
        </div>
        {/* First Grid: Logo & About   */}
        <div className="w3-row">
             <div className="w3-half w3-container text-center">
                <h1 className="w3-jumbo w3-text-grey">Simplifying</h1>
                <h2 className="w3-xxlarge w3-text-grey">Vacation</h2>
                <h2 className="w3-xxlarge w3-text-grey">Property </h2>
                <h2 className="w3-xxlarge w3-text-grey">Management</h2>
             </div>
             <div className="w3-half w3-container w3-xlarge w3-text-grey">
                <p className="lead">The inspiration for vacation property manager arose out of a need to simplify the tedious tasks that are intrinsically linked to managing rental properties. 
                </p>
                <p className="lead"> The critical pieces of information are scattered in our memories as well as across our email and hard drives.  It's really only useful when you can access it expediently. Time is money. </p>
                <p className="lead">  Although property management firms can assist with some of the big ticket items, they cannot manage to the finest level of granularity that would truly set your business apart from your competition and ultimately translate to a stellar experience for your guests. 
                </p>
        
            </div>
        </div>

        {/* Second Grid: Resent   */}

        <div className="w3-row">
            <span>
                <br></br>
                <div className="w3-half w3-container">
                    <img src={pic2} style={{ width: '100%' }} alt={"Foo eating a sandwich."} />
                </div>
                <div className="w3-half w3-container">
                    <img src={pic1} style={{ width: '100%' }} alt={"Foo eating a sandwich."}/>
                </div>
            </span>
        </div>
        </div>
    </div>
  ) 
}
