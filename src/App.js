import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import {auth} from "./Firebase"
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser, //Here we're sending the user info into the reducer
        })
      } else {
        dispatch({
          type: 'SET_USER',
          USER: null,
        })
      }
    })
  
  }, [])


  return (
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
