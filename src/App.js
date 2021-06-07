
import React, { useEffect } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import Orders from './Orders'
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Login from './Login'
import { auth } from './Firebase'
import { useStateValue } from './StateProvider'
import Payment from './Payment'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'


const promise = loadStripe(
  "pk_test_51IyCkCGDpXfgd5NmOHuT8e4kjdQzVsiCukFamLb38M3B7U6wO2Dny52ihaIBs73pfIrhvgl3FzmtSqRqfiNzwtjO00PBSfGMJE"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser, //Here we're sending the user info into the reducer
        });
      } else {
        dispatch({
          type: "SET_USER",
          USER: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/orders'>
          <Header />
            <Orders />
          </Route>
          <Route path='/login'>

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
            <Home /> {/* Always make sure default is at the bottom */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
