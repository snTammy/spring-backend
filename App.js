import Header from "./component/header/Header"
import Cabin from './images/img1.jpg';
import Property from './images/img2.jpg';
import Indoor from './images/img3.jpg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>


<main>

  <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="10000">
        
        
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Leading Vacation Property Management Service</h1>
            <br></br>
            <p>When you want something done right, you can do it all by yourself . . .  with our help</p>
            <p><a className="btn btn-lg btn-primary" href="/sign-up">Sign up today</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div className="container marketing">  
    {/*CABIN */}
    <hr className="featurette-divider"/>
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Overhead cost reduction</h2>
          <p className="lead">Need help with tracking the day-in day-out activies of managing your vacation properties? </p>
          <p className="lead">Using our app will save you countless hours. </p>
        </div>
        <div className="col-md-5">
          <div className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
          <img src={Cabin} width="600" height="500"alt="Vacation property #1"/>
          </div>   
        </div>
      </div>

    <hr className="featurette-divider"/>
      {/*INDOOR */}  
        <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">Balance maintenance and repair</h2>
        <p className="lead">Need some assistance managing guest supplies and other property and appliance maintenance around your guests' bookings? Try our app! </p>
      </div>
      <div className="col-md-5">
        <div className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <img src={Indoor}  width="600" height="500" alt="Vacation property #2"/>
        </div>

      </div>
    </div>

    <hr classNameName="featurette-divider"/>
      {/*PROPERTY */} 
    <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Logistics simplified</h2>
          <p className="lead">Need help with the logistics of stocking and restocking guest amenities? </p>
          <p className="lead">Using our app will minimize the headaches of property management. </p>
        </div>
        <div className="col-md-5">
          <div className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
          <img src={Property} width="600" height="500"alt="Vacation property #1"/>
          </div>   
        </div>
      </div>
    <hr classNameName="featurette-divider"/>
    <br/>
    
  </div>
 
  <footer classNameName="container">
    <p classNameName="float-end"><a href="#">Back to top</a></p>
    <p>&copy; 2022 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
  </footer>
  </main>

</div>
  );
}

export default App;
