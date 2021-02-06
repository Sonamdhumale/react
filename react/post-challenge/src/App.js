import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import FetchPosts from "./components/FetchPosts";
//import Modifications from "./components/Modifications";
import Spinner from "./resources/spinner.gif";

class DynamicImport extends React.Component {
  state = {
    component: null,
  };
  componentDidMount() {
    console.log("in did mount ");
    setTimeout(() => {
      this.props.load().then((mod) =>
        this.setState(() => ({
          component: mod.default,
        }))
      );
    }, 2000);
  }
  render() {
    return this.props.children(this.state.component);
  }
}
const Loading = () => (
  <div className="">
    <h1>Loading</h1>
    <img src={Spinner} className="fp-loader" alt="loading" />
  </div>
);

const FetchPosts = (props) => (
  <DynamicImport load={() => import("./components/FetchPosts")}>
    {(Component) =>
      Component === null ? <Loading /> : <Component {...props} />
    }
  </DynamicImport>
);

const LazyModifications = React.lazy(() =>
  import("./components/Modifications")
);

export default class App extends Component {
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

          <React.Suspense fallback={<Loading />}>
            <Route
              path="/Modifications/:id"
              exact
              component={LazyModifications}
            />
          </React.Suspense>
        </Router>
      </div>
    );
  }
}
console.log("first statement");
