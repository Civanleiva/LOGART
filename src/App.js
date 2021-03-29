import React from "react";
import "./styles/globalStyles.css"
import "tailwindcss/dist/base.css";
import LandingPage from "./views/LandingPage.js";
import SignInPage from "./views/SignInPage";
import SignUpPage from "./views/SignUpPage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import OrderProductPage from "./views/OrderProductPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route path="/Signin/">
          <SignInPage />
        </Route>

        <Route path="/Signup/">
          <SignUpPage />
        </Route>

        <Route path="/OrderProduct">
          <OrderProductPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
