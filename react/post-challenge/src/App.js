import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FetchPosts from "./components/FetchPosts";
import Modifications from "./components/Modifications";

class App extends Component {
  render() {
    console.log("inside app");
    return (
      <div className="App">
        <Router>
          <Route path="/" exact>
            <FetchPosts />
          </Route>
          <Route path="/FetchPosts" exact>
            <FetchPosts />
          </Route>
          <Route path="/Modifications/:id" exact>
            <Modifications />
          </Route>
        </Router>
      </div>
    );
  }
}
console.log("first statement");
export default App;
