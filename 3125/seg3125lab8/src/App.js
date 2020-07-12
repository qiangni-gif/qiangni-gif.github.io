import React, { Component } from "react";
import { BrowserRouter as Router, Route,Switch, Redirect } from "react-router-dom";

// Importing components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/home/HomePage";
import Cars from "./components/cars/Cars";
import ShowDetails from "./components/details/ShowDetails";
import Booking from "./components/booking/Booking";
import NotFound from "./components/pages/NotFound";
import NewUser from "./components/login/NewUser";
import AboutUs from "./components/about/AboutUs";
// ------------------------------------------------------------
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/cars" component={Cars} />
            <Route path="/details" component={ShowDetails} />
            <Route path="/booking" component={Booking} />
            <Route path="/newuser" component={NewUser} />
            <Route path="/about" component={AboutUs} />
            <Route path="/page404" component={NotFound} />
            <Redirect to="/page404" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
