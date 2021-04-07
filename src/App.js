import React from "react";
import "./styles/globalStyles.css";
import "tailwindcss/dist/base.css";
import LandingPage from "./views/LandingPage.js";
import SignInPage from "./views/SignInPage";
import SignUpPage from "./views/SignUpPage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import OrderProductPage from "./views/OrderProductPage";
import AdminPage from "./views/AdminPage";
import { useSelector } from "react-redux";

function App() {
  const userSignedIn = useSelector((state) => state.userSignin);
  const { userInfo } = userSignedIn;

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
          {userInfo ? <OrderProductPage /> : <SignInPage />}
        </Route>

        <Route path="/admin">
          <AdminPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
