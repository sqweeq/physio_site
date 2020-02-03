import React, { useEffect } from "react";

import Homepage from "./components/Homepage";
import About from "./components/About";
import Services from "./components/Services";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Register from "./components/Register";
import Login from "./components/Login";
import { loadUser } from "./actions/authActions";
import PaymentForm from "./components/PaymentForm";
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          {/* <Homepage /> */}
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/home" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route path="/shop#/payment" component={PaymentForm} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
