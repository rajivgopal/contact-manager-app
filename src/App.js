import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import Provider from "./context";
import AddContact from "./components/contacts/AddContact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import NotFound from "./pages/404";

function App() {
  return (
    <div className="container" style={{ width: "600px", align: "left" }}>
      <Provider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/add/contact" component={AddContact} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
