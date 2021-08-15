import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/MainView/About/About";
import Blog from "./components/MainView/Blog/Blog";
import Contacts from "./components/MainView/Contacts/Contacts";
import Destination from "./components/MainView/Destination/Destination";
import Home from "./components/MainView/Home/Home";
import Services from "./components/MainView/Services/Services";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/destination/:country" component={Destination} />

      <Route path="/blog" component={Blog} />
      <Route path="/services" component={Services} />
      <Route path="/contacts/:countr" component={Contacts} />
    </Switch>
  );
}

export default Routes;
