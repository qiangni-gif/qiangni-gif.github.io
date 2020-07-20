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


import { I18nextProvider } from "react-i18next";
import i18n from "./Localization/i18n";
// ------------------------------------------------------------
import "./App.css";

console.log("index i18n "+i18n);



class App extends Component {
  state = {
    value: "en"
  };

  

  render() {
    const handlelang = (value) => {
      console.log("selected val is ", value);
      this.setState({value: value});
      console.log("state value is", this.state.value);
      // i18n.changeLanguage(value);
    };

    return (
      <I18nextProvider i18n={i18n}>
      <Router>
        <div>
          <Header i18n={i18n} functionCallFromapp={handlelang.bind(this)} />
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
    </I18nextProvider>
    );
  }
}

export default App;
