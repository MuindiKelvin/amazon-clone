import React from "react";
import { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe (" pk_test_51IINF0LCegZ3sUt0d2IcDznOqm4AZ1eSxblvkk37B1i28Ot2YLQxFlUIDZKvhgH1L27hWZJdZAtJgxsUOiAEMPnG00oDnDmTeR"
  );

function App() {
  const [{ basket }, dispatch] = useStateValue();

  //keep track of who's signed in
  useEffect (() => {
    //will only run once when the app component loads...
    auth.onAuthStateChanged( authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        //the user just logged in/ the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [basket])


  return (
    //BEM
  <Router>
  <div className="app">
    <Switch>
      <Route path="/login">
          <Login />
      </Route>
       <Route path="/checkout">
            <Header />
            <Checkout />
       </Route>
       <Route path="/payment">
         <Header />
         <Elements stripe={promise}>
            <Payment />
         </Elements>
       </Route>
       <Route path="/">
            <Header />
            <Home />
       </Route>
       
    </Switch>
      
  </div>
  </Router>
  );
}

export default App;
