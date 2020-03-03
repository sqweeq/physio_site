import React, { useEffect } from "react";

import Homepage from "./components/Homepage";
import About from "./components/About";
import Services from "./components/Services";
import Faq from "./components/Faq";
// import Contact from "./components/Contact";
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
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/home" component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/faq" component={Faq} />
          {/* <Route path="/contact" component={Contact} /> */}
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route exact path="/shop" component={Shop} />

          <Route path="/payment" component={PaymentForm} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
