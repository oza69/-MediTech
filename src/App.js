import "./App.css";
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import { GoalPage } from './pages/GoalPage';
import DasherOrder from './pages/DasherOrder';
import Login from './pages/Login';
import DasherPastOrder from './pages/DasherPastOrder';
import OrderAccepted from './pages/OrderAccepted';
import ProductDetails from './pages/ProductDetails';
import Payment from './pages/Payment';
import Address from './pages/Address/Address';
import OverView from './pages/OverView/OverView';
import Register from './pages/Register';
import OrderSuccess from './Component/OrderSucces';
import Cart from './pages/Cart';
import ContactForm from "./pages/ContactForm";
import Team from "./pages/meetourteam";

class App extends Component {

  render() {
    return (
      <div className="application-container">
        <Router>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/goal">
              <GoalPage />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/dasher/dasher-orders">
              <DasherOrder />
            </Route>
            <Route exact path="/dasher/past-orders">
              <DasherPastOrder />
            </Route>
            <Route exact path='/dasher/order-success'>
              <OrderSuccess />
            </Route>
            <Route exact path="/dasher/order-acceptted">
              <OrderAccepted />
            </Route>
            <Route exact path="/customer/search-product">
              <ProductDetails />
            </Route>
            <Route exact path="/customer/address">
              <Address />
            </Route>
            <Route exact path="/customer/payment">
              <Payment />
            </Route>
            <Route exact path="/customer/order-success">
              <OverView />
            </Route>
            <Route exact path="/customer/order-review">
              <Cart />
            </Route>
            <Route exact path="/contactform">
              <ContactForm />
            </Route>
            <Route exact path="/meetourteam" component={Team} />
            <Route exact path="">
              <LandingPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
