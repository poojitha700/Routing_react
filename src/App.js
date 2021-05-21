import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Contact from "./components/Contact";
import LifeCycleMethod from "./components/LifeCycleMethod";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <header>
            <Header />
          </header>
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} Users={this.state} />
              <Route path="/register" exact component={Register} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/lifecycle" exact component={LifeCycleMethod} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </main>
        </Router>
      </Fragment>
    );
  }
}
export default App;
