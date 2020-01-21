import React from "react";
import "./styles/App.css";
import "./styles/Footer.css";
import "./styles/Header.css";
import "./styles/Profile.css";
import "./styles/Families.css";
import "./styles/MyFamily.css";
import "./styles/Home.css";
import "./styles/Notifications.css";
import Header from "./components/Header/Header"
import Carousel from "./components/Home/Carousel"
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import ContactUs from "./components/Header/ContactUs"
import Footer from "./components/Footer/Footer"
import AboutUs from "./components/Header/AboutUs"
import Families from "./components/Families/Families"
import FamilyDetails from "./components/Families/FamilyDetails"
import FAQ from "./components/Header/FAQ"
import SiteMap from "./components/Footer/SiteMap"
import PrivacyPolicy from "./components/Footer/PrivacyPolicy"
import Notifications from "./components/Notifications/Notifications"
import CreateFamily from "./components/Profile/CreateFamily"
import UpdateFamily from "./components/Profile/UpdateFamily"




function App() {
  return (
    <div className="home">
      
      <Router history={history}>
      <Header/>
        <Switch>
          <Route path="/" exact><Carousel /></Route>
          <Route path="/contactus"><ContactUs/></Route>
          <Route path="/aboutus"><AboutUs/></Route>
          <Route path="/faq"><FAQ/></Route>
          <Route path="/privacy-policy"><PrivacyPolicy /></Route>
          <Route path="/site-map"><SiteMap /></Route>
        </Switch>

        <Switch>
          <Route path="/" exact />
          <PrivateRoute exact path="/profile" component={Profile} />
          {/* <PrivateRoute exact path="/myfamily" component={MyFamily} /> */}
          <PrivateRoute exact path="/families" component={Families} />
          <PrivateRoute exact path="/family/:id" component={FamilyDetails} />
          <PrivateRoute exact path="/notifications" component={Notifications} />
          <PrivateRoute exact path="/create-family" component={CreateFamily} />
          <PrivateRoute exact path="/update-family" component={UpdateFamily} />
          
        </Switch>

        <Footer />
 
        
      </Router>


    

      
      
      





    </div>
  );
}

export default App;

