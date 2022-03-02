import Header from "../header/Header"
import SignUp from "../signup/SignUp"
import AboutUs from "../AboutUs/AboutUs";
import {Route, withRouter} from "react-router-dom";
import ThankYou from "../thankyou/ThankYou";
import Home from "../home/Home";
import AddressEdit from "../AddressEdit";
import App from "../../App";
import NotFound from "../notfound/NotFound";
import Login from "../login/Login";
import ResetUser from "../ResetUser";

const Layout = () => {
   
    const toggleRoutes = () => {
        //return routes for authenticated student
        if(localStorage.getItem('loggedInUser')){
            return(
                <div>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>    
                <Route path="/about-us" component={AboutUs}/>
                <Route path="/addressEdit" component={AddressEdit}/>
                <Route path="/settings" component={ResetUser}/>
                </div>
            );
        }else{
            //return routes for unauthenticated student
            return(
                <div>
                    <Route exact path="/" component={App}/>
                    <Route path="/sign-up" component={SignUp}/>
                    <Route path="/thank-you" component={ThankYou}/>
                    <Route path="/about-us" component={AboutUs}/>
                    <Route path="/login" component={Login}/>
                    
                </div>
            );
        }
    }

    return(
        <div>
            <Header />
            {toggleRoutes()}
        </div>
    )
}
export default withRouter(Layout);