import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeComponent from './component/Home/homeComponent'
import DetailsComponent from './component/details/detailsComponent'
import SearchComponent from './component/search/searchComponent'
import ErrorComponent from './component/error/errorCompnent'
import NavComponent from "./component/Home/navComponent";

function App() {
  return (
    <Router>
      <NavComponent/>
      <div className="container ">
        <Switch>
      <Route path="/" exact component={HomeComponent} />
      <Route path="/details/:id" exact component={DetailsComponent} />
      <Route path="/search" exact component={SearchComponent} />
      <Route path="*" component={ErrorComponent} />
      </Switch>
      </div>
      
    </Router>
  );
}

export default App;
