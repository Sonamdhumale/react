import React, { Component } from "react";
import "./App.css";
import FetchPosts from "./components/FetchPosts";

class App extends Component {
 
  render() {
    console.log('inside app');
    return (
      <div className="App">
        <FetchPosts />
      </div>
    );
  }
}
console.log('first statement');
export default App;