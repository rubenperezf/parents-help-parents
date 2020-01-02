import React from "react";
import "./App.css";
import Header from "./components/Header"
import Carousel from "./components/Carousel"
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import MyFamily from "./components/MyFamily"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import AboutUs from "./components/AboutUs"
import Families from "./components/Families"
import FamilyDetails from "./components/FamilyDetails"
import FAQ from "./components/FAQ"
import SiteMap from "./components/SiteMap"
import PrivacyPolicy from "./components/PrivacyPolicy"



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
          <Route path="privacy-policy"><PrivacyPolicy/></Route>
          <Route path="site-map"><SiteMap/></Route>
        </Switch>

        <Switch>
          <Route path="/" exact />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/myfamily" component={MyFamily} />
          <PrivateRoute exact path="/families" component={Families} />
          <PrivateRoute exact path="/family/:id" component={FamilyDetails} />


        </Switch>
       
        <Footer />
        
        
        
      </Router>


    

      
      
      





    </div>
  );
}

export default App;

